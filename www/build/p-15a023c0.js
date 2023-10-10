const e="A survenit o eroare în timpul încărcării diagramei.",a="Există un total de ${ elementCount } bare în această diagramă. Diagramele cu bare cu o serie sunt limitate la ${ totalLimit } bare. Alegeți un câmp categorie cu mai puține valori unice sau aplicați un filtru asupra datelor dvs.",i="Diagramele cu bare cu două serii sunt limitate la ${ totalLimit } bare sau ${ seriesLimit } bare pe serie. Alegeți un câmp categorie cu mai puține valori unice sau aplicați un filtru asupra datelor dvs.",t="Diagramele cu bare cu două sau mai multe serii sunt limitate la ${ totalLimit } bare sau ${ seriesLimit } bare pe serie. Alegeți un câmp categorie cu mai puține valori unice sau aplicați un filtru asupra datelor dvs.",r="A existat o eroare la crearea diagramei.",n="Nu se poate aplica o transformare de jurnal în valori negative sau zero.",u="Nu se poate aplica o transformare a rădăcinii pătrate în valori negative.",s="A survenit o eroare în timpul încărcării stratului tematic. URL = ${ url }. ID-ul elementului de portal = ${ portalItemId }.",l="${ dataPath } trebuie să fie unic. Seria denumită ${ seriesName } are un ID (${ seriesID }) utilizat deja de către o altă serie.",o="${ dataPath } nu poate efectua agregarea non-numărare pe un câmp non-numeric.",m="${ dataPath } are lipsă o proprietate denumită ${ missingProperty }.",c="${ dataPath } nu trebuie să fie mai scurt de ${ limit } caractere.",d="${ dataPath } nu trebuie să aibă mai puțin de ${ limit } articole.",p="${ dataPath } nu trebuie să aibă mai mult de ${ limit } articole.",g="${ dataPath } trebuie să aibă cel puțin un caracter non-spațiu gol.",v="${ dataPath } nu trebuie să aibă ${ additionalProperty }.",C="${ dataPath } trebuie să fie egal cu una dintre aceste valori permise: ${ allowedValues }.",$="${ dataPath } trebuie să corespundă schemei uneia dintre acestea: ${ schemaOptions }.",b="Proprietăţile graficului de dispersie cu simbolurile proporţionale nu sunt acceptate. A fost aplicată dimensiunea implicită a simbolului.",h="A eșuat citirea datelor de intrare.",L="Histrogramele necesită cel puțin două valori numerice.",f="Tipul așteptat al serie la indicele ${ seriesIndex } este „${ expectedType }”, dar a fost primit „${ receivedType }”",x="sau",E="Asigurați-vă că suma totală a câmpului (câmpurilor) numerice alese returnează toate valorile pozitive sau toate valorile negative.",P="Există un total de ${ sliceCount } sectoare în această diagramă. Diagramele radiale sunt limitate la ${ totalLimit } sectoare. Alegeți un câmp categorie cu mai puține valori unice, adăugați mai puține câmpuri numerice sau aplicați un filtru asupra datelor dvs.",S="Instrumentele de măsură bazate pe obiecte spațiale sunt limitate la ${ totalLimit } obiecte spațiale. Filtrați-vă datele.",I="Există un total de ${ seriesCount } serii și ${ elementCount } puncte de date în această diagramă. Diagramele cu linii sunt limitate la ${ seriesLimit } serii și ${ totalLimit } puncte de date. Reduceți numărul de serii și/sau reagregați sau filtrați datele.",y="Diagramele cu linii sunt limitate la ${ totalLimit } puncte de date. Filtrați sau reînsumați datele și încercați din nou.";var A={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"A existat o eroare la crearea diagramei.",negativeValueInDataForLogTransformation:"Nu se poate aplica o transformare de jurnal în valori negative sau zero.",negativeValueInDataForSqrtTransformation:"Nu se poate aplica o transformare a rădăcinii pătrate în valori negative.",layerLoadFailure:s,duplicateSeriesID:l,nonNumericAggregation:o,requiredProperty:m,minLength:c,minItems:d,maxItems:p,whiteSpacePattern:g,additionalProperty:v,enumValues:C,anyOfValues:$,bubbleChartValidateMsg:b,queryError:h,histogramEmptyField:"Histrogramele necesită cel puțin două valori numerice.",invalidSeriesType:f,or:"sau",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Asigurați-vă că suma totală a câmpului (câmpurilor) numerice alese returnează toate valorile pozitive sau toate valorile negative.",pieChartSlicesCannotExceedLimit:P,gaugeCannotExceedLimit:S,lineChartSeriesAndMarkersCannotExceedLimit:I,lineChartMarkersCannotExceedLimit:y};export default A;export{v as additionalProperty,$ as anyOfValues,b as bubbleChartValidateMsg,e as defaultError,r as defaultInvalidChart,l as duplicateSeriesID,C as enumValues,S as gaugeCannotExceedLimit,L as histogramEmptyField,f as invalidSeriesType,s as layerLoadFailure,y as lineChartMarkersCannotExceedLimit,I as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,d as minItems,c as minLength,n as negativeValueInDataForLogTransformation,u as negativeValueInDataForSqrtTransformation,o as nonNumericAggregation,x as or,E as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,P as pieChartSlicesCannotExceedLimit,h as queryError,m as requiredProperty,t as threePlusSeriesBarCountCannotExceedLimit,i as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,g as whiteSpacePattern};
//# sourceMappingURL=p-15a023c0.js.map