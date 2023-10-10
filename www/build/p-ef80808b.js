const e="Při načítání grafu došlo k chybě.",a="V tomto grafu je celkem ${ elementCount } sloupců. Pruhové grafy s jednou řadou mohou mít maximálně ${ totalLimit } pruhů. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",t="Pruhové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",o="Pruhové grafy se třemi a více řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",n="Při vytváření grafu došlo k chybě.",i="Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.",r="Nelze uplatnit transformaci odmocniny na záporné hodnoty.",s="Při načítání vrstvy došlo k chybě. URL = ${ url }. ID položky portálu = ${ portalItemId }.",l="${ dataPath } musí být jedinečné. Řada s názvem ${ seriesName } má ID (${ seriesID }), které již používá jiná řada.",m="${ dataPath } nemůže provádět jiné seskupení než podle počtu na jiném než numerickém poli.",d="V ${ dataPath } chybí vlastnost s názvem ${ missingProperty }.",u="${ dataPath } nesmí být kratší než ${ limit } znaků.",h="${ dataPath } nesmí obsahovat méně než ${ limit } položek.",p="${ dataPath } nesmí obsahovat více než ${ limit } položek.",v="${ dataPath } musí obsahovat alespoň jeden znak jiný než mezera.",y="${ dataPath } nesmí obsahovat ${ additionalProperty }.",c="${ dataPath } se musí rovnat jedné z těchto povolených hodnot: ${ allowedValues }.",g="${ dataPath } se musí shodovat s jedním z těchto schémat: ${ schemaOptions }.",b="Rozptýlené bodové grafy s proporcionálními symboly nejsou podporovány. Byla použita výchozí velikost symbolu.",$="Vstupní data se nepodařilo přečíst.",j="Histogramy vyžadují alespoň dvě číselné hodnoty.",C="Očekávaný typ řady s indexem ${ seriesIndex } je '${ expectedType }', ale obdrželi jsme '${ receivedType }'",f="nebo",L="Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.",P="V tomto grafu je celkem ${ sliceCount } výsečí. Koláčové grafy jsou omezeny na ${ totalLimit } výseče. Vyberte pole Kategorie s menším počtem jedinečných hodnot, přidejte méně číselných polí nebo použijte na data filtr.",k="Měřiče založené na prvcích jsou omezeny na počet ${ totalLimit } prvků. Filtrujte data.",x="V tomto grafu je celkem ${ seriesCount } sérií a ${ elementCount } datových bodů. Liniové grafy jsou limitované na ${ seriesLimit } série a ${ totalLimit } datové body. Snížit počet sérií a/nebo znovu seskupit nebo filtrovat data.",z="Liniové grafy jsou limitované na ${ totalLimit } datové body. Filtrujte nebo znovu agregujte svá data a zkuste to znovu.";var S={defaultError:"Při načítání grafu došlo k chybě.",uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"Při vytváření grafu došlo k chybě.",negativeValueInDataForLogTransformation:"Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.",negativeValueInDataForSqrtTransformation:"Nelze uplatnit transformaci odmocniny na záporné hodnoty.",layerLoadFailure:s,duplicateSeriesID:l,nonNumericAggregation:m,requiredProperty:d,minLength:u,minItems:h,maxItems:p,whiteSpacePattern:v,additionalProperty:"${ dataPath } nesmí obsahovat ${ additionalProperty }.",enumValues:c,anyOfValues:g,bubbleChartValidateMsg:b,queryError:$,histogramEmptyField:"Histogramy vyžadují alespoň dvě číselné hodnoty.",invalidSeriesType:C,or:"nebo",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.",pieChartSlicesCannotExceedLimit:P,gaugeCannotExceedLimit:k,lineChartSeriesAndMarkersCannotExceedLimit:x,lineChartMarkersCannotExceedLimit:z};export default S;export{y as additionalProperty,g as anyOfValues,b as bubbleChartValidateMsg,e as defaultError,n as defaultInvalidChart,l as duplicateSeriesID,c as enumValues,k as gaugeCannotExceedLimit,j as histogramEmptyField,C as invalidSeriesType,s as layerLoadFailure,z as lineChartMarkersCannotExceedLimit,x as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,h as minItems,u as minLength,i as negativeValueInDataForLogTransformation,r as negativeValueInDataForSqrtTransformation,m as nonNumericAggregation,f as or,L as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,P as pieChartSlicesCannotExceedLimit,$ as queryError,d as requiredProperty,o as threePlusSeriesBarCountCannotExceedLimit,t as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,v as whiteSpacePattern};
//# sourceMappingURL=p-ef80808b.js.map