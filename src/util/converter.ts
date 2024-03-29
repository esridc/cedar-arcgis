/**
 * This script will convert Cedar chart definitions into ArcGIS Chart specifications. 
 * 
 * Not all chart types or functionality is supported yet. This script is an initial version that will progressively add more conversion capabilities.
 */

import { 
  CategoryFormatOptions, 
  DateTimeFormatOptions, 
  NumberFormatOptions, 
  WebChart, 
  WebChartAxis, 
  WebChartDataSources, 
  WebChartLegend, 
  WebChartSeriesType 
} from "@arcgis/charts-spec";

// @ts-ignore - where to get Color type?
const cedarColors:Record<any,Color> = {
  blue: [0, 121, 193, 255],
  gray: [128, 128, 128, 200],
  red: [255, 0, 0, 200],
  white: [255, 255, 255, 255]
}

/**
 * Draft function for converting Cedar bar charts to ArcGIS Charts
 * @param cedar
 * @returns
 */
export function convertCedar(cedar, title="") {

  const json: WebChart = {
    //@ts-ignore
    version: "1.0.0",
    type: "chart",
    dataSource: convertData(cedar),
    id: "Chart",
    background: cedarColors.white,
    cursorCrosshair: {
      type: "cursorCrosshair",
      style: {
        type: "esriSLS",
        style: "esriSLSDash",
        color: cedarColors.red,
        width: 1,
      },
      horizontalLineVisible: true,
      verticalLineVisible: true,
    },
    title: {
      type: "chartText",
      content: {
        type: "esriTS",
        color: cedarColors.gray,
        text: title,
        font: {
          size: 20,
        },
      },
    },
    series: [],
    // @ts-ignore // we'll add this below
    axes: [],
  };

  json.axes = convertAxes(cedar);

  cedar.series.map((set, index) => {
    json.series.push(convertSet(cedar, set, index));

  });

  json.legend = convertLegend(cedar);

  return json;
}

/**
 * Creates an ArcGIS Charts legend from Cedar definition
 * @param cedar Cedar definition
 * @returns 
 */
function convertLegend(cedar: any): WebChartLegend {
  return {
    type: "chartLegend",
    visible: true,
    title: {
      type: "chartText",
      visible: true,
      content: {
        type: "esriTS",
        color: cedarColors.white,
        text: cedar.series[0].category.label,
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    body: {
      type: "esriTS",
      color: cedarColors.white,
      font: {
        size: 12,
      },
    },
    position: "right",
  };
}

/**
 * Creates an ArcGIS Charts Set (a single Series) from Cedar definition
 * @param cedar Cedar definition
 */
function convertSet(cedar: any, set: any, index: any): WebChartSeriesType {
  return {
    type: convertChartType(cedar),
    id: set.source || `chart${index}`,
    name: set.value.label,
    query: cedar.datasets[0].query || {},
    x: set.category.field,
    y: set.value.field,
    colorType: "singleColor",
    // stackedType: "sideBySide",
    markerSymbol: {
      type: "esriSMS",
      style: "esriSMSCircle",
      size: 5
    },
    fillSymbol: {
      type: "esriSFS",
      color: [0, 121, 193, 200],
      outline: {
        type: "esriSLS",
        color: cedarColors.white,
        width: 1,
      },
    },
    lineSymbol: {
      type: "esriSLS",
      width: 1
    },
    dataLabels: {
      type: "chartText",
      visible: false,
      content: {
        type: "esriTS",
        color: cedarColors.blue,
        font: {
          size: 14,
        },
      },
    },
  };
}

/**
 * Creates an ArcGIS Charts axis pair from Cedar definition
 * @param cedar Cedar definition
 * @returns Dependent and independent axes based on category, number, or time
 */
function convertAxes(cedar: any): [WebChartAxis, WebChartAxis?] {
  return [
    {
      type: "chartAxis",
      visible: axesVisible(cedar),
      title: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          text: cedar.series[0].category.label,
          font: convertFontSize(cedar)
        }
      },
      labels: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          font: convertFontSize(cedar)
        }
      },
      valueFormat: convertValueFormat(cedar.series[0].category),
      lineSymbol: {
        type: "esriSLS",
        color: cedarColors.gray,
        width: 2
      }
    },
    {
      type: "chartAxis",
      visible: axesVisible(cedar),
      title: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          text: cedar.series[0].value.label,
          font: convertFontSize(cedar)
        }
      },
      labels: {
        type: "chartText",
        visible: axesVisible(cedar),
        content: {
          type: "esriTS",
          color: cedarColors.gray,
          font: convertFontSize(cedar)
        }
      },
      valueFormat: convertValueFormat(cedar.series[0].value),
      grid: {
        type: "esriSLS",
        color: cedarColors.gray,
        width: 1
      },
      lineSymbol: {
        type: "esriSLS",
        color: cedarColors.gray,
        width: 2
      }
    }
  ];
}

/**
 * Creates an ArcGIS Charts data source for feature layer in inline from the Cedar definition
 * @param cedar Cedar definition
 * @returns 
 */
function convertData(cedar): WebChartDataSources {

  let dataSource = {} as WebChartDataSources;
  // Dynamic data
  if(!!cedar.datasets[0].url) {
    dataSource = {
      type: "layer",
      layer: {
        layerType: "ArcGISFeatureLayer",
        id: "",
        url: cedar.datasets[0].url,
      },
    }
  }
  // Inline data
  if(!!cedar.datasets[0].data) {
    dataSource = {
      type: "inline",
      processed: true,
      data: {
        dataItems: cedar.datasets[0].data.features.map((f) => {
          return f.attributes
        }),
      },
    }
  }

  return dataSource;

}

/**
 * Convert Cedar axis config to ArcGIS charts axis config
 * Defaults to Category
 * @param seriesConfig 
 * @returns 
 */
function convertValueFormat( seriesConfig ) {
  if(seriesConfig?.type === "timestamp") {
    return ({
      type: "date",
      intlOptions: {}
    } as DateTimeFormatOptions);
  } else if(seriesConfig.type === "number") {
    return ({
      type: "number",
      intlOptions: {
        style: "decimal",
        notation: "compact",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    } as NumberFormatOptions);
  } else {
    return({
      type: "category",
      characterLimit: 11,
      intlOptions: {}
    } as CategoryFormatOptions);
  }
   
}

function convertChartType(cedar) {
  switch(cedar.type) {
    case 'sparkline': {
      return 'lineSeries';
    }
    case 'line': {
      return 'lineSeries';
    }
    case 'bar': {
      return 'barSeries';
    }
  }
}

function convertFontSize( _cedar ) {
  return({
    size: 14
  })
}
function axesVisible( cedar ) {
  return cedar.type !== 'sparkline';
}

