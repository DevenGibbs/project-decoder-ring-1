// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (encode == false) shift = -shift; 
    input = input.toLowerCase();
    newMessage = ""
    //loop through each character in the input
    for (let i = 0; i < input.length; i++) {
      let letterCode = input[i].charCodeAt(0); //will be corresponding number
      // a = 97, z = 122   
      if (letterCode >= 97 && letterCode <= 122) {
        // three scenarios: 1. shifts off the end of the alpha, 2. shifts off the beginning of the alpha, 3. lands within the alpha
        // adjust if necessary and add to "newMessage"
        if ((letterCode + shift) > 122) {
          newMessage += String.fromCharCode((letterCode + shift) - 26);
        } else if ((letterCode + shift) < 97) {
          newMessage += String.fromCharCode((letterCode + shift) + 26);
        } else {
          newMessage += String.fromCharCode(letterCode + shift);
        }
        // if not within letter range - don't shift, just add to "newMessage"
      } else {
        newMessage += input[i];
      } 
    }
    return newMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
