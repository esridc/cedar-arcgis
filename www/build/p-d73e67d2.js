const e="Er is een fout opgetreden bij het laden van de grafiek.",a="Er staan in totaal ${ elementCount } staven in dit diagram. Staafdiagrammen met 1 serie zijn beperkt tot ${ totalLimit } staven. Kies een veld Categorie met minder unieke waarden of pas een filter toe op uw gegevens.",t="Staafdiagrammen met 2 series zijn beperkt tot ${ totalLimit } staven, of ${ seriesLimit } staven per serie. Kies een veld Categorie met minder unieke waarden of pas een filter toe op uw gegevens.",n="Staafdiagrammen met 3 of meer series zijn beperkt tot ${ totalLimit } staven, of ${ seriesLimit } staven per serie. Kies een veld Categorie met minder unieke waarden of pas een filter toe op uw gegevens.",i="Er is een fout opgetreden bij het creëren van de grafiek.",r="Kan logtransformatie niet toepassen op negatieve of nulwaarden.",o="Kan transformatie vierkantswortel niet toepassen op negatieve waarden.",s="Er is een fout opgetreden bij het laden van de laag. URL = ${ url }. Portal item ID = ${ portalItemId }.",d="${ dataPath } moet uniek zijn. De serie genaamd ${ seriesName } heeft een ID (${ seriesID }) die al wordt gebruikt door een andere serie.",m="${ dataPath } kan geen niet-telbare aggregatie uitvoeren op een niet-numeriek veld.",l="${ dataPath } mist een eigenschap met de naam ${ missingProperty }.",g="${ dataPath } mag niet korter zijn dan ${ limit } tekens.",u="${ dataPath } mag niet minder dan ${ limit } items hebben.",p="${ dataPath } mag niet meer dan ${ limit } items hebben.",v="${ dataPath } moet minstens één non-whitespace teken hebben.",f="${ dataPath } mag geen ${ additionalProperty } hebben.",h="${ dataPath } moet gelijk zijn aan een van deze toegelaten waarden: ${ allowedValues }.",C="${ dataPath } moet overeenkomen met het schema van een van deze: ${ schemaOptions }.",$="Spreidingsdiagrammen met proportionele symbolen worden niet ondersteund. Standaardsymboolgrootte is toegepast.",b="Kan invoergegevens niet lezen.",k="Histogrammen hebben minimaal twee numerieke waarden nodig.",c="Het verwachte serietype bij index ${ seriesIndex } is '${ expectedType }' maar '${ receivedType }' is in plaats daarvan ontvangen",w="of",L="Zorg dat de totale som van de gekozen numerieke velden alle positieve waarden of alle negatieve waarden retourneert",E="Er staan in totaal ${ sliceCount } staven in dit diagram. Cirkeldiagrammen hebben maximaal ${ totalLimit } segmenten. Kies een veld Categorie met minder unieke waarden, voeg minder numerieke velden toe of pas een filter toe op uw gegevens.",P="Objectgebaseerde meters zijn beperkt tot ${ totalLimit } objecten. Filter uw data.",S="Er zijn in totaal ${ seriesCount } reeksen en ${ elementCount } gegevenspunten in deze grafie. Lijn grafieken zijn beperkt tot ${ seriesLimit } reeksen en ${ totalLimit } gegevenspunten. Verminder het aantal series en/of opnieuw samenvoeg of uw gegevens filteren.",x="Lijngrafieken zijn beperkt tot ${ totalLimit } gegevenspunten. Filter uw gegevens of aggregeer deze nog eens en probeer het opnieuw.";var y={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:n,defaultInvalidChart:"Er is een fout opgetreden bij het creëren van de grafiek.",negativeValueInDataForLogTransformation:"Kan logtransformatie niet toepassen op negatieve of nulwaarden.",negativeValueInDataForSqrtTransformation:"Kan transformatie vierkantswortel niet toepassen op negatieve waarden.",layerLoadFailure:s,duplicateSeriesID:d,nonNumericAggregation:m,requiredProperty:l,minLength:g,minItems:u,maxItems:p,whiteSpacePattern:v,additionalProperty:"${ dataPath } mag geen ${ additionalProperty } hebben.",enumValues:h,anyOfValues:C,bubbleChartValidateMsg:$,queryError:"Kan invoergegevens niet lezen.",histogramEmptyField:k,invalidSeriesType:c,or:"of",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Zorg dat de totale som van de gekozen numerieke velden alle positieve waarden of alle negatieve waarden retourneert",pieChartSlicesCannotExceedLimit:E,gaugeCannotExceedLimit:P,lineChartSeriesAndMarkersCannotExceedLimit:S,lineChartMarkersCannotExceedLimit:x};export default y;export{f as additionalProperty,C as anyOfValues,$ as bubbleChartValidateMsg,e as defaultError,i as defaultInvalidChart,d as duplicateSeriesID,h as enumValues,P as gaugeCannotExceedLimit,k as histogramEmptyField,c as invalidSeriesType,s as layerLoadFailure,x as lineChartMarkersCannotExceedLimit,S as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,u as minItems,g as minLength,r as negativeValueInDataForLogTransformation,o as negativeValueInDataForSqrtTransformation,m as nonNumericAggregation,w as or,L as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,E as pieChartSlicesCannotExceedLimit,b as queryError,l as requiredProperty,n as threePlusSeriesBarCountCannotExceedLimit,t as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,v as whiteSpacePattern};
//# sourceMappingURL=p-d73e67d2.js.map