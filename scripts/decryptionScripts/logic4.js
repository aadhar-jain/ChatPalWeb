export async function logic4(letter) {
    let decryptedString = "";

    // for lowercase
    if (letter === String.fromCharCode(48)) {
        decryptedString += "a";
    } else if (letter === String.fromCharCode(33)) {
        decryptedString += "b";
    } else if (letter === String.fromCharCode(58)) {
        decryptedString += "c";
    } else if (letter === String.fromCharCode(62)) {
        decryptedString += "d";
    } else if (letter === String.fromCharCode(49)) {
        decryptedString += "e";
    } else if (letter === String.fromCharCode(34)) {
        decryptedString += "f";
    } else if (letter === String.fromCharCode(61)) {
        decryptedString += "g";
    } else if (letter === String.fromCharCode(43)) {
        decryptedString += "h";
    } else if (letter === String.fromCharCode(50)) {
        decryptedString += "i";
    } else if (letter === String.fromCharCode(63)) {
        decryptedString += "j";
    } else if (letter === String.fromCharCode(51)) {
        decryptedString += "k";
    } else if (letter === String.fromCharCode(128)) {
        decryptedString += "l";
    } else if (letter === String.fromCharCode(52)) {
        decryptedString += "m";
    } else if (letter === String.fromCharCode(53)) {
        decryptedString += "n";
    } else if (letter === String.fromCharCode(54)) {
        decryptedString += "o";
    } else if (letter === String.fromCharCode(59)) {
        decryptedString += "p";
    } else if (letter === String.fromCharCode(64)) {
        decryptedString += "q";
    } else if (letter === String.fromCharCode(41)) {
        decryptedString += "r";
    } else if (letter === String.fromCharCode(60)) {
        decryptedString += "s";
    } else if (letter === String.fromCharCode(55)) {
        decryptedString += "t";
    } else if (letter === String.fromCharCode(47)) {
        decryptedString += "u";
    } else if (letter === String.fromCharCode(56)) {
        decryptedString += "v";
    } else if (letter === String.fromCharCode(40)) {
        decryptedString += "w";
    } else if (letter === String.fromCharCode(42)) {
        decryptedString += "x";
    } else if (letter === String.fromCharCode(57)) {
        decryptedString += "y";
    } else if (letter === String.fromCharCode(44)) {
        decryptedString += "z";
    }

    // for uppercase
    if (letter === String.fromCharCode(101)) {
        decryptedString += "A";
    } else if (letter === String.fromCharCode(107)) {
        decryptedString += "B";
    } else if (letter === String.fromCharCode(91)) {
        decryptedString += "C";
    } else if (letter === String.fromCharCode(97)) {
        decryptedString += "D";
    } else if (letter === String.fromCharCode(92)) {
        decryptedString += "E";
    } else if (letter === String.fromCharCode(93)) {
        decryptedString += "F";
    } else if (letter === String.fromCharCode(108)) {
        decryptedString += "G";
    } else if (letter === String.fromCharCode(94)) {
        decryptedString += "H";
    } else if (letter === String.fromCharCode(95)) {
        decryptedString += "I";
    } else if (letter === String.fromCharCode(96)) {
        decryptedString += "J";
    } else if (letter === String.fromCharCode(110)) {
        decryptedString += "K";
    } else if (letter === String.fromCharCode(98)) {
        decryptedString += "L";
    } else if (letter === String.fromCharCode(123)) {
        decryptedString += "M";
    } else if (letter === String.fromCharCode(102)) {
        decryptedString += "N";
    } else if (letter === String.fromCharCode(124)) {
        decryptedString += "O";
    } else if (letter === String.fromCharCode(99)) {
        decryptedString += "P";
    } else if (letter === String.fromCharCode(105)) {
        decryptedString += "Q";
    } else if (letter === String.fromCharCode(127)) {
        decryptedString += "R";
    } else if (letter === String.fromCharCode(109)) {
        decryptedString += "S";
    } else if (letter === String.fromCharCode(104)) {
        decryptedString += "T";
    } else if (letter === String.fromCharCode(111)) {
        decryptedString += "U";
    } else if (letter === String.fromCharCode(106)) {
        decryptedString += "V";
    } else if (letter === String.fromCharCode(100)) {
        decryptedString += "W";
    } else if (letter === String.fromCharCode(125)) {
        decryptedString += "X";
    } else if (letter === String.fromCharCode(103)) {
        decryptedString += "Y";
    } else if (letter === String.fromCharCode(126)) {
        decryptedString += "Z";
    }

    // for numbers
    if (letter === String.fromCharCode(113)) {
        decryptedString += "0";
    } else if (letter === String.fromCharCode(65)) {
        decryptedString += "1";
    } else if (letter === String.fromCharCode(68)) {
        decryptedString += "2";
    } else if (letter === String.fromCharCode(112)) {
        decryptedString += "3";
    } else if (letter === String.fromCharCode(114)) {
        decryptedString += "4";
    } else if (letter === String.fromCharCode(69)) {
        decryptedString += "5";
    } else if (letter === String.fromCharCode(116)) {
        decryptedString += "6";
    } else if (letter === String.fromCharCode(66)) {
        decryptedString += "7";
    } else if (letter === String.fromCharCode(67)) {
        decryptedString += "8";
    } else if (letter === String.fromCharCode(115)) {
        decryptedString += "9";
    }

    // for symbols (33-47)
    if (letter === String.fromCharCode(79)) {
        decryptedString += String.fromCharCode(33);
    } else if (letter === String.fromCharCode(71)) {
        decryptedString += String.fromCharCode(34);
    } else if (letter === String.fromCharCode(117)) {
        decryptedString += String.fromCharCode(35);
    } else if (letter === String.fromCharCode(75)) {
        decryptedString += String.fromCharCode(36);
    } else if (letter === String.fromCharCode(76)) {
        decryptedString += String.fromCharCode(37);
    } else if (letter === String.fromCharCode(118)) {
        decryptedString += String.fromCharCode(38);
    } else if (letter === String.fromCharCode(72)) {
        decryptedString += String.fromCharCode(39);
    } else if (letter === String.fromCharCode(77)) {
        decryptedString += String.fromCharCode(40);
    } else if (letter === String.fromCharCode(119)) {
        decryptedString += String.fromCharCode(41);
    } else if (letter === String.fromCharCode(78)) {
        decryptedString += String.fromCharCode(42);
    } else if (letter === String.fromCharCode(73)) {
        decryptedString += String.fromCharCode(43);
    } else if (letter === String.fromCharCode(120)) {
        decryptedString += String.fromCharCode(44);
    } else if (letter === String.fromCharCode(74)) {
        decryptedString += String.fromCharCode(45);
    } else if (letter === String.fromCharCode(70)) {
        decryptedString += String.fromCharCode(46);
    } else if (letter === String.fromCharCode(121)) {
        decryptedString += String.fromCharCode(47);
    }

    // for symbols (58-64)
    if (letter === String.fromCharCode(83)) {
        decryptedString += String.fromCharCode(58);
    } else if (letter === String.fromCharCode(80)) {
        decryptedString += String.fromCharCode(59);
    } else if (letter === String.fromCharCode(85)) {
        decryptedString += String.fromCharCode(60);
    } else if (letter === String.fromCharCode(81)) {
        decryptedString += String.fromCharCode(61);
    } else if (letter === String.fromCharCode(84)) {
        decryptedString += String.fromCharCode(62);
    } else if (letter === String.fromCharCode(82)) {
        decryptedString += String.fromCharCode(63);
    } else if (letter === String.fromCharCode(122)) {
        decryptedString += String.fromCharCode(64);
    }

    // for symbols (91-96)
    if (letter === String.fromCharCode(89)) {
        decryptedString += String.fromCharCode(91);
    } else if (letter === String.fromCharCode(87)) {
        decryptedString += String.fromCharCode(92);
    } else if (letter === String.fromCharCode(165)) {
        decryptedString += String.fromCharCode(93);
    } else if (letter === String.fromCharCode(88)) {
        decryptedString += String.fromCharCode(94);
    } else if (letter === String.fromCharCode(90)) {
        decryptedString += String.fromCharCode(95);
    } else if (letter === String.fromCharCode(86)) {
        decryptedString += String.fromCharCode(96);
    }

    // for symbols (123-126)
    if (letter === String.fromCharCode(236)) {
        decryptedString += String.fromCharCode(123);
    } else if (letter === String.fromCharCode(239)) {
        decryptedString += String.fromCharCode(124);
    } else if (letter === String.fromCharCode(244)) {
        decryptedString += String.fromCharCode(125);
    } else if (letter === String.fromCharCode(247)) {
        decryptedString += String.fromCharCode(126);
    }

    return decryptedString;
}
