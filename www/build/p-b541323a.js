const e="Une erreur est survenue lors du chargement du diagramme.",a="Ce diagramme comporte ${ elementCount } barres au total. Les diagrammes à barres avec une série sont limités à ${ totalLimit } barres. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",s="Les diagrammes à barres avec deux séries sont limités à ${ totalLimit } barres, ou ${ seriesLimit } barres par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",t="Les diagrammes à barres avec trois séries ou plus sont limités à ${ totalLimit } barres, ou ${ seriesLimit } barres par série. Choisissez un champ de catégorie avec moins de valeurs uniques ou appliquez un filtre à vos données.",i="Une erreur est survenue lors de la création du diagramme.",r="Impossible d'appliquer une transformation logarithmique à des valeurs négatives ou égales à zéro.",n="Impossible d'appliquer une transformation de racine carrée à des valeurs négatives.",o="Une erreur est survenue lors du chargement de la couche. URL = ${ url }. ID de l'élément du portail = ${ portalItemId }.",u="${ dataPath } doit être unique. La série nommée ${ seriesName } comporte un ID (${ seriesID }) qui est déjà utilisé par une autre série.",l="${ dataPath } ne peut pas réaliser d'agrégation de type autre que Total sur un champ non numérique.",d="Propriété ${ missingProperty } manquante dans ${ dataPath }.",m="${ dataPath } ne doit pas comporter moins de ${ limit } caractères.",p="${ dataPath } ne doit pas comporter moins de ${ limit } éléments.",c="${ dataPath } ne doit pas comporter plus de ${ limit } éléments.",g="${ dataPath } doit contenir au moins un caractère autre qu'un espace.",v="${ dataPath } ne doit pas contenir ${ additionalProperty }.",h="${ dataPath } doit être égal à l'une de ces valeurs autorisées : ${ allowedValues }.",C="${ dataPath } doit correspondre à l'une des structures suivantes : ${ schemaOptions }.",L="Les nuages de points avec des symboles proportionnels ne sont pas pris en charge. La taille de symbole par défaut a été appliquée.",$="Échec de la lecture des données en entrée.",q="Les histogrammes requièrent au moins deux valeurs numériques.",x="Le type de série attendu à l’index ${ seriesIndex } est '${ expectedType }', mais '${ receivedType }' a été reçu à la place",b="ou",f="Assurez-vous que la somme totale du ou des champs numériques sélectionnés renvoie toutes les valeurs positives ou toutes les valeurs négatives.",y="Ce diagramme comporte ${ sliceCount } secteurs au total. Les diagrammes à secteurs sont limités à ${ totalLimit } secteurs. Choisissez un champ de catégorie avec moins de valeurs uniques, ajoutez moins de champs numériques ou appliquez un filtre à vos données.",P="Les jauges basées sur les entités sont limitées à ${ totalLimit } entités. Filtrez vos données.",I="Ce diagramme contient ${ seriesCount } séries et ${ elementCount } points de données au total. Les diagrammes linéaires sont limités à ${ seriesLimit } séries et ${ totalLimit } points de données. Réduisez le nombre de séries et/ou réagrégez ou filtrez vos données.",z="Les diagrammes linéaires sont limités à ${ totalLimit } points de données. Filtrez ou réagrégez vos données et réessayez.";var E={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:s,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"Une erreur est survenue lors de la création du diagramme.",negativeValueInDataForLogTransformation:"Impossible d'appliquer une transformation logarithmique à des valeurs négatives ou égales à zéro.",negativeValueInDataForSqrtTransformation:"Impossible d'appliquer une transformation de racine carrée à des valeurs négatives.",layerLoadFailure:o,duplicateSeriesID:u,nonNumericAggregation:l,requiredProperty:d,minLength:m,minItems:p,maxItems:c,whiteSpacePattern:g,additionalProperty:v,enumValues:h,anyOfValues:C,bubbleChartValidateMsg:L,queryError:$,histogramEmptyField:q,invalidSeriesType:x,or:"ou",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Assurez-vous que la somme totale du ou des champs numériques sélectionnés renvoie toutes les valeurs positives ou toutes les valeurs négatives.",pieChartSlicesCannotExceedLimit:y,gaugeCannotExceedLimit:P,lineChartSeriesAndMarkersCannotExceedLimit:I,lineChartMarkersCannotExceedLimit:z};export default E;export{v as additionalProperty,C as anyOfValues,L as bubbleChartValidateMsg,e as defaultError,i as defaultInvalidChart,u as duplicateSeriesID,h as enumValues,P as gaugeCannotExceedLimit,q as histogramEmptyField,x as invalidSeriesType,o as layerLoadFailure,z as lineChartMarkersCannotExceedLimit,I as lineChartSeriesAndMarkersCannotExceedLimit,c as maxItems,p as minItems,m as minLength,r as negativeValueInDataForLogTransformation,n as negativeValueInDataForSqrtTransformation,l as nonNumericAggregation,b as or,f as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,y as pieChartSlicesCannotExceedLimit,$ as queryError,d as requiredProperty,t as threePlusSeriesBarCountCannotExceedLimit,s as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,g as whiteSpacePattern};
//# sourceMappingURL=p-b541323a.js.map