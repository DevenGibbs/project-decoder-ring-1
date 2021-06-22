// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let final = "";
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "(i/j)",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const polybiusSquare = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];

    // set up for "encode" letters --> numbers
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        input = input.toLowerCase();
        let index = alphabet.indexOf(input[i]);
        // handling spaces
        if (index === -1 && input[i] === " ") {
          final += " ";
        // handling "i" & "j"  
        } else if ((index === -1 && input[i] === "i") || input[i] === "j") {
          final += polybiusSquare[8];
        // handling all other letters  
        } else {
          final += polybiusSquare[index];
        }
      }

    //set up for "decode" numbers --> letters  
    } else if (!encode) {
      // when decoding, number of characters in string excluding spaces should be even - otherwise, return false.
      let inputWithoutSpace = input.replace(/ /g, "");
      if (inputWithoutSpace.length % 2 !==0) {
        return false;
      } else {
        let forInputArr = input.replace(/ /g, "  ");
        let inputArr = forInputArr.match(/.{1,2}/g);
        //console.log(inputArr);
        for (let i = 0; i < inputArr.length; i++) {
          let index = polybiusSquare.indexOf(inputArr[i]);
          if (index === -1) {
            final += " ";
          } else {
            final += alphabet[index];
          }
        }
      }
    }
    return final;

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
