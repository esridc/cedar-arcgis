const a="Wystąpił błąd podczas wczytywania diagramu.",e="Na tym diagramie znajduje się łącznie następująca liczba słupków: ${ elementCount }. Diagramy słupkowe z jedną serią są ograniczone do następującej liczby słupków: ${ totalLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",i="Diagramy słupkowe z dwiema seriami są ograniczone do następującej liczby słupków: ${ totalLimit } lub następującej liczby słupków na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",t="Diagramy słupkowe z trzema lub większą liczbą serii są ograniczone do następującej liczby słupków: ${ totalLimit } lub następującej liczby słupków na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",n="Wystąpił błąd podczas tworzenia diagramu.",o="Nie można zastosować transformacji Logarytm do wartości ujemnych lub równych zero.",r="Nie można zastosować transformacji Pierwiastek kwadratowy do wartości ujemnych.",s="Wystąpił błąd podczas wczytywania warstwy. URL = ${ url }. Identyfikator elementu portalu = ${ portalItemId }.",c="Nazwa ${ dataPath } musi być unikalna. Seria o nazwie ${ seriesName } ma identyfikator (${ seriesID }), który jest już używany przez inną serię.",l="Element ${ dataPath } nie może wykonywać agregacji innej niż zliczenie na polu innym niż liczbowe.",m="W elemencie ${ dataPath } brak właściwości o nazwie ${ missingProperty }.",u="Element ${ dataPath } nie może być krótszy niż następująca liczba znaków: ${ limit }.",d="Element ${ dataPath } nie może mieć mniej elementów niż ${ limit }.",y="Element ${ dataPath } nie może mieć więcej elementów niż ${ limit }.",w="Element ${ dataPath } musi zawierać co najmniej jeden znak inny niż biały znak.",z="Element ${ dataPath } nie może zawierać ${ additionalProperty }.",p="Element ${ dataPath } musi mieć wartość równą jednej z tych dozwolonych wartości: ${ allowedValues }.",j="Element ${ dataPath } musi być zgodny z jednym z tych schematów: ${ schemaOptions }.",h="Diagramy punktowe z symbolami proporcjonalnymi nie są obsługiwane. Zastosowano domyślną wielkość symbolu.",b="Nie powiódł się odczyt danych wejściowych.",g="Histogramy wymagają co najmniej dwóch wartości liczbowych.",k="Oczekiwany typ serii z indeksem ${ seriesIndex } to '${ expectedType }', ale zamiast niego otrzymano '${ receivedType }'",C="lub",$="Sprawdź, czy suma całkowita wybranych pól liczbowych zwraca tylko wartości dodatnie czy tylko wartości ujemne.",L="Na tym diagramie znajduje się łącznie następująca liczba wycinków: ${ sliceCount }. Na diagramach kołowych może znajdować się maksymalnie ${ totalLimit } wycinków. Wybierz pole Kategoria zawierające mniej wartości unikalnych, dodaj mniej pól liczbowych lub zastosuj filtr do swoich danych.",E="Kontrolki oparte na obiektach są ograniczone do następującej liczby obiektów: ${ totalLimit }. Przefiltruj dane.",f="Na tym diagramie znajduje się łącznie następująca liczba serii: ${ seriesCount } i następująca liczba punktów danych: ${ elementCount }. W przypadku diagramów liniowych obowiązują ograniczenia do następującej liczby serii: ${ seriesLimit } i następującej liczby punktów danych: ${ totalLimit }. Zmniejsz liczbę serii i/lub ponownie zagreguj lub przefiltruj dane.",P="W przypadku diagramów liniowych obowiązują ograniczenia do następującej liczby punktów danych: ${ totalLimit }. Przefiltruj lub ponownie agreguj dane i spróbuj ponownie.";var S={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"Wystąpił błąd podczas tworzenia diagramu.",negativeValueInDataForLogTransformation:"Nie można zastosować transformacji Logarytm do wartości ujemnych lub równych zero.",negativeValueInDataForSqrtTransformation:"Nie można zastosować transformacji Pierwiastek kwadratowy do wartości ujemnych.",layerLoadFailure:s,duplicateSeriesID:c,nonNumericAggregation:l,requiredProperty:m,minLength:u,minItems:d,maxItems:y,whiteSpacePattern:w,additionalProperty:z,enumValues:p,anyOfValues:j,bubbleChartValidateMsg:h,queryError:b,histogramEmptyField:g,invalidSeriesType:k,or:"lub",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Sprawdź, czy suma całkowita wybranych pól liczbowych zwraca tylko wartości dodatnie czy tylko wartości ujemne.",pieChartSlicesCannotExceedLimit:L,gaugeCannotExceedLimit:E,lineChartSeriesAndMarkersCannotExceedLimit:f,lineChartMarkersCannotExceedLimit:P};export default S;export{z as additionalProperty,j as anyOfValues,h as bubbleChartValidateMsg,a as defaultError,n as defaultInvalidChart,c as duplicateSeriesID,p as enumValues,E as gaugeCannotExceedLimit,g as histogramEmptyField,k as invalidSeriesType,s as layerLoadFailure,P as lineChartMarkersCannotExceedLimit,f as lineChartSeriesAndMarkersCannotExceedLimit,y as maxItems,d as minItems,u as minLength,o as negativeValueInDataForLogTransformation,r as negativeValueInDataForSqrtTransformation,l as nonNumericAggregation,C as or,$ as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,L as pieChartSlicesCannotExceedLimit,b as queryError,m as requiredProperty,t as threePlusSeriesBarCountCannotExceedLimit,i as twoSeriesBarCountCannotExceedLimit,e as uniqueSeriesBarCountCannotExceedLimit,w as whiteSpacePattern};
//# sourceMappingURL=p-39faebbd.js.map