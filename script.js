let text = document.getElementById("text");
let rest = document.getElementById("result");

// CETTE PARTIE PERMET DE CALCULER LES BINAIRES EN DÉCIMAL
let number = "";
let numberI = 0;
function BinToDec() {
  number = "";
  numberI = 0;
  let ch = "";
  let pos = 1;
  number = text.value;
  numberI = parseInt(number);

  if (!isNaN(numberI)) {
    numberI = 0;
    for (let i = number.length - 1; i >= 0; i--) {
      ch = number.charAt(i);
      numberI = numberI + parseInt(ch) * pos;
      pos = pos * 2;
    }
    // CETTE METHODE DE  ( rest.innerHTML ) PERMET DE FAIRE push BINAIRE to DÉCIMAL';
    rest.innerHTML = numberI;
  } else rest.innerHTML = "Something happe with the input";
}

// CETTE PARTIE PERMET DE CALCULER LES BINAIRES EN HEXADÉCIMAL
function BinToHex() {
  let pos = 1,
    toto = "",
    ch = "";
  let total = " ";
  number = "";
  numberI = 0;
  number = text.value;
  numberI = parseInt(number);
  if (!isNaN(numberI)) {
    numberI = 0;
    while (number.length % 4 != 0) {
      number = "0" + number;
    }
    for (let i = number.length - 4; i >= 0; i -= 4) {
      toto = number.substr(i, 4);
      for (let j = toto.length - 1; j >= 0; j--) {
        ch = toto.charAt(j);
        numberI = numberI + parseInt(ch) * pos;
        pos = pos * 2;
        console;
      }
      if (numberI < 10) total = numberI + total;
      if (numberI == 10) total = "A" + total;
      if (numberI == 11) total = "B" + total;
      if (numberI == 12) total = "C" + total;
      if (numberI == 13) total = "D" + total;
      if (numberI == 14) total = "E" + total;
      if (numberI == 15) total = "F" + total;
      pos = 1;
      numberI = 0;
    }
    // CETTE METHODE DE   (rest.innerHTML ) PERMET DE FAIRE push BINAIRE to HEXADÉCIMAL;
    rest.innerHTML = total;
  } else rest.innerHTML = "Something happe with the input";
}

// CETTE PARTIE PERMET DE CALCULER LES DÉCIMAL EN BINAIR
function DecToBin() {
  let total = "";
  number = "";
  numberI = 0;
  number = text.value;
  numberI = parseInt(number);
  if (!isNaN(numberI)) {
    if (numberI > 0) {
      while (numberI > 0) {
        total = parseInt(numberI % 2) + total;
        numberI = parseInt(numberI / 2);
      }
      rest.innerHTML = total;
    } else rest.innerHTML = "0";
  } else rest.innerHTML = "Something  happe with the input";
}

// CETTE PARTIE PERMET DE CALCULER LES DÉCIMAL EN HEXADÉCIMAL
function DecToHex() {
  let total = "";
  number = "";
  numberI = 0;
  number = text.value;
  numberI = parseInt(number);
  if (!isNaN(numberI)) {
    if (numberI > 0) {
      while (numberI > 0) {
        if (numberI % 16 < 10) total = parseInt(numberI % 16) + total;
        else {
          if (numberI % 16 == 10) total = "A" + total;
          else if (numberI % 16 == 11) total = "B" + total;
          else if (numberI % 16 == 12) total = "C" + total;
          else if (numberI % 16 == 13) total = "D" + total;
          else if (numberI % 16 == 14) total = "E" + total;
          else if (numberI % 16 == 15) total = "F" + total;
        }
        numberI = parseInt(numberI / 16);
      }
      // CETTE METHODE DE  ( rest.innerHTML) PERMET DE FAIRE push DÉCIMAL to HEXADÉCIMAL;
      rest.innerHTML = total;
    } else rest.innerHTML = "0";
  } else rest.innerHTML = "Something happe with the input";
}

// CETTE PARTIE PERMET DE CALCULER L'HEXADÉCIMAL EN DÉCIMAL
function HexToDec() {
  let total = "";
  number = "";
  numberI = 0;
  let ch = "";
  let pos = 0;
  number = text.value;
  for (let i = number.length - 1; i >= 0; i--) {
    ch = number.charAt(i);
    if (ch == "A") ch = "10";
    else if (ch == "B") ch = "11";
    else if (ch == "C") ch = "12";
    else if (ch == "D") ch = "13";
    else if (ch == "E") ch = "14";
    else if (ch == "F") ch = "15";

    numberI = numberI + parseInt(ch) * Math.pow(16, pos);
    pos++;
  }
  // CETTE METHODE DE   (rest.innerHTML) PERMET DE FAIRE push HEXADÉCIMAL to DÉCIMAL;
  rest.innerHTML = numberI;
}

// CETTE PARTIE PERMET DE CALCULER L'HEXADÉCIMAL EN BINAIRE
function HexToBin() {
  let total = "";
  number = "";
  numberI = 0;
  let ch = "";
  let pos = 0;
  number = text.value;
  for (let i = number.length - 1; i >= 0; i--) {
    ch = number.charAt(i);
    if (ch == "A") total = "1010";
    else if (ch == "B") total = "1011";
    else if (ch == "C") total = "1100";
    else if (ch == "D") total = "1101";
    else if (ch == "E") total = "1110";
    else if (ch == "F") total = "1111";
    else if (ch == "9") total = "1001";
    else if (ch == "8") total = "1000";
    else if (ch == "7") total = "0111";
    else if (ch == "6") total = "0110";
    else if (ch == "5") total = "0101";
    else if (ch == "4") total = "0100";
    else if (ch == "3") total = "0011";
    else if (ch == "2") total = "0010";
    else if (ch == "1") total = "0001";
    else if (ch == "0") total = "0000";
    numberI = total + numberI;
  }
  // CETTE METHODE DE   (rest.innerHTML ) PERMET DE FAIRE push HEXADÉCIMAL to BINAIRE';
  rest.innerHTML = numberI;
}
