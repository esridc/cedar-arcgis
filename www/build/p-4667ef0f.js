const e="Παρουσιάστηκε κάποιο σφάλμα κατά τη φόρτωση του γραφήματος.",a="Υπάρχουν συνολικά ${ elementCount } ράβδοι σε αυτό το γράφημα. Για τα γραφήματα ράβδων με μία σειρά ισχύει όριο ${ totalLimit } ράβδων. Επιλέξτε ένα πεδίο Κατηγορίας με λιγότερες μοναδικές τιμές ή εφαρμόστε φίλτρο στα δεδομένα σας.",t="Για τα γραφήματα ράβδων με δύο σειρές ισχύει όριο ${ totalLimit } ράβδων ή ${ seriesLimit } ράβδων ανά σειρά. Επιλέξτε ένα πεδίο Κατηγορίας με λιγότερες μοναδικές τιμές ή εφαρμόστε φίλτρο στα δεδομένα σας.",i="Για τα γραφήματα ράβδων με τρεις ή περισσότερες σειρές ισχύει όριο ${ totalLimit } ράβδων ή ${ seriesLimit } ράβδων ανά σειρά. Επιλέξτε ένα πεδίο Κατηγορίας με λιγότερες μοναδικές τιμές ή εφαρμόστε φίλτρο στα δεδομένα σας.",r="Παρουσιάστηκε κάποιο σφάλμα κατά τη δημιουργία του γραφήματος.",n="Δεν είναι δυνατή η εφαρμογή του μετασχηματισμού αρχείου καταγραφής σε αρνητικές ή μηδενικές τιμές.",s="Δεν είναι δυνατή η εφαρμογή του μετασχηματισμού τετραγωνικής ρίζας σε αρνητικές τιμές.",o="Παρουσιάστηκε κάποιο σφάλμα κατά τη φόρτωση του θεματικού επιπέδου. Διεύθυνση URL = ${ url }. Αναγνωριστικό αντικειμένου του portal = ${ portalItemId }.",l="Το ${ dataPath } πρέπει να είναι μοναδικό. Η σειρά με το όνομα ${ seriesName } έχει αναγνωριστικό (${ seriesID }) που ήδη χρησιμοποιείται από κάποια άλλη σειρά.",d="Το ${ dataPath } δεν μπορεί να εκτελέσει συνάθροιση χωρίς μέτρηση σε μη αριθμητικό πεδίο.",m="Από το ${ dataPath } λείπει μια ιδιότητα με το όνομα ${ missingProperty }.",u="Το ${ dataPath } δεν πρέπει να έχει λιγότερους από ${ limit } χαρακτήρες.",C="Το ${ dataPath } δεν πρέπει να έχει λιγότερα από ${ limit } στοιχεία.",$="Το ${ dataPath } δεν πρέπει να έχει περισσότερα από ${ limit } στοιχεία.",h="Το ${ dataPath } πρέπει να έχει τουλάχιστον έναν χαρακτήρα που να μην είναι κενό διάστημα.",L="Το ${ dataPath } δεν πρέπει να έχει ${ additionalProperty }.",c="Το ${ dataPath } πρέπει να ισούται με μία από τις εξής επιτρεπόμενες τιμές: ${ allowedValues }.",p="Το ${ dataPath } πρέπει να συμφωνεί με τη δομή ενός από τα εξής: ${ schemaOptions }.",g="Δεν υποστηρίζονται γραφήματα διασποράς με αναλογικά σύμβολα. Έχει εφαρμοστεί το προεπιλεγμένο μέγεθος συμβόλου.",x="Αποτυχία ανάγνωσης δεδομένων εισόδου",P="Τα ιστογράμματα απαιτούν τουλάχιστον δύο αριθμητικές τιμές.",E="Ο αναμενόμενος τύπος σειράς στο ευρετήριο ${ seriesIndex } είναι '${ expectedType }', αλλά λήφθηκε '${ receivedType }' αντί γι' αυτό",S="ή",y="Βεβαιωθείτε ότι το άθροισμα του επιλεγμένου ή των επιλεγμένων αριθμητικών πεδίων επιστρέφει όλες τις θετικές τιμές ή όλες τις αρνητικές τιμές.",v="Υπάρχουν συνολικά ${ sliceCount } τμήματα σε αυτό το γράφημα. Τα γραφήματα πίτας περιορίζονται σε ${ totalLimit } τμήματα. Επιλέξτε πεδίο κατηγορίας με λιγότερες μοναδικές τιμές, προσθέστε λιγότερα αριθμητικά πεδία ή εφαρμόστε φίλτρο στα δεδομένα σας.",I="Οι μετρητές που βασίζονται σε χαρακτηριστικά περιορίζονται σε ${ totalLimit } χαρακτηριστικά. Φιλτράρισμα των δεδομένων σας.",f="Υπάρχουν συνολικά ${ seriesCount } σειρές και ${ elementCount } σημεία δεδομένων σε αυτό το γράφημα. Τα γραφήματα γραμμών περιορίζονται σε ${ seriesLimit } σειρές και ${ totalLimit } σημεία δεδομένων. Μειώστε τον αριθμό σειρών ή/και επανασυναθροίστε ή φιλτράρετε τα δεδομένα σας.",V="Τα γραφήματα γραμμών περιορίζονται σε ${ totalLimit } σημεία δεδομένων. Φιλτράρετε ή συγκεντρώστε εκ νέου τα δεδομένα σας και δοκιμάστε ξανά.";var q={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:i,defaultInvalidChart:r,negativeValueInDataForLogTransformation:"Δεν είναι δυνατή η εφαρμογή του μετασχηματισμού αρχείου καταγραφής σε αρνητικές ή μηδενικές τιμές.",negativeValueInDataForSqrtTransformation:"Δεν είναι δυνατή η εφαρμογή του μετασχηματισμού τετραγωνικής ρίζας σε αρνητικές τιμές.",layerLoadFailure:o,duplicateSeriesID:l,nonNumericAggregation:d,requiredProperty:m,minLength:u,minItems:C,maxItems:$,whiteSpacePattern:h,additionalProperty:L,enumValues:c,anyOfValues:p,bubbleChartValidateMsg:g,queryError:x,histogramEmptyField:P,invalidSeriesType:E,or:"ή",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Βεβαιωθείτε ότι το άθροισμα του επιλεγμένου ή των επιλεγμένων αριθμητικών πεδίων επιστρέφει όλες τις θετικές τιμές ή όλες τις αρνητικές τιμές.",pieChartSlicesCannotExceedLimit:v,gaugeCannotExceedLimit:I,lineChartSeriesAndMarkersCannotExceedLimit:f,lineChartMarkersCannotExceedLimit:V};export default q;export{L as additionalProperty,p as anyOfValues,g as bubbleChartValidateMsg,e as defaultError,r as defaultInvalidChart,l as duplicateSeriesID,c as enumValues,I as gaugeCannotExceedLimit,P as histogramEmptyField,E as invalidSeriesType,o as layerLoadFailure,V as lineChartMarkersCannotExceedLimit,f as lineChartSeriesAndMarkersCannotExceedLimit,$ as maxItems,C as minItems,u as minLength,n as negativeValueInDataForLogTransformation,s as negativeValueInDataForSqrtTransformation,d as nonNumericAggregation,S as or,y as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,v as pieChartSlicesCannotExceedLimit,x as queryError,m as requiredProperty,i as threePlusSeriesBarCountCannotExceedLimit,t as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,h as whiteSpacePattern};
//# sourceMappingURL=p-4667ef0f.js.map