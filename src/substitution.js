// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // alphabet input refers to substitution alphabet
    let final = "";
    let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();

    //helper function to ensure all characters of input alphabet are unique
    function isUnique(str) {
      let obj = {};
      for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) return false;
        else obj[str[i]] = true;
      }
      return true;
    }

    try {
      //alphabet input must be present, exactly 26 characters, and all characters must be unique, otherwise return false
      if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet)) {
        throw false;
      // set up for "encode" normal alpha --> replacement alpha  
      } else if (encode) {
        for (let i = 0; i < input.length; i++) {
          let index = normalAlphabet.indexOf(input[i]);
          if (index === -1 && input[i] === " ") {
            final += " ";
          } else {
            final += alphabet[index];
          }
        }
      // set up for "decode" replacement alpha --> normal alpha
      } else if (!encode) {
        for (let i = 0; i < input.length; i++) {
          let index = alphabet.indexOf(input[i]);
          if (index === -1 && input[i] === " ") {
            final += " ";
          } else {
            final += normalAlphabet[index];
          }
        }
      }
      return final;
    } catch (error) {
      return error;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
