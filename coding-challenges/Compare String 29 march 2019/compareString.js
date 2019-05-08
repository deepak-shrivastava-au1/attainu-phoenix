'use strict';

var compareStrings = function(a, b) {
  var difference = 0;
  
       
 if(a.length == b.length) {
    for(var i = 0; i < a.length; i++) {
      if(a[i] != b[i]) {
        difference++;
      }
    }
    console.log("The Difference Between these two strings is = ", difference);
  return difference;

  } else {
      if(a.length > b.length) {
        difference = a.length - b.length;
        console.log("The Difference Between these two strings is = ", difference);
         return difference; 
        
      } 
      else {
          difference = b.length - a.length;
          console.log("The Difference Between these two strings is = ", difference);
            return difference;
            
        
           }
        }

}
compareStrings("Javascript", "Javascript");