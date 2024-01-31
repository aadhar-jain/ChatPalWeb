export async function logic3(letter) {
    let decryptedString = "";

    // for lowercase
    if (letter === String.fromCharCode(90)) {
        decryptedString += "a";
    } else if (letter === String.fromCharCode(89)) {
        decryptedString += "b";
    } else if (letter === String.fromCharCode(88)) {
        decryptedString += "c";
    } else if (letter === String.fromCharCode(87)) {
        decryptedString += "d";
    } else if (letter === String.fromCharCode(86)) {
        decryptedString += "e";
    } else if (letter === String.fromCharCode(85)) {
        decryptedString += "f";
    } else if (letter === String.fromCharCode(84)) {
        decryptedString += "g";
    } else if (letter === String.fromCharCode(83)) {
        decryptedString += "h";
    } else if (letter === String.fromCharCode(82)) {
        decryptedString += "i";
    } else if (letter === String.fromCharCode(81)) {
        decryptedString += "j";
    } else if (letter === String.fromCharCode(80)) {
        decryptedString += "k";
    } else if (letter === String.fromCharCode(79)) {
        decryptedString += "l";
    } else if (letter === String.fromCharCode(78)) {
        decryptedString += "m";
    } else if (letter === String.fromCharCode(77)) {
        decryptedString += "n";
    } else if (letter === String.fromCharCode(76)) {
        decryptedString += "o";
    } else if (letter === String.fromCharCode(75)) {
        decryptedString += "p";
    } else if (letter === String.fromCharCode(74)) {
        decryptedString += "q";
    } else if (letter === String.fromCharCode(73)) {
        decryptedString += "r";
    } else if (letter === String.fromCharCode(72)) {
        decryptedString += "s";
    } else if (letter === String.fromCharCode(71)) {
        decryptedString += "t";
    } else if (letter === String.fromCharCode(70)) {
        decryptedString += "u";
    } else if (letter === String.fromCharCode(69)) {
        decryptedString += "v";
    } else if (letter === String.fromCharCode(68)) {
        decryptedString += "w";
    } else if (letter === String.fromCharCode(67)) {
        decryptedString += "x";
    } else if (letter === String.fromCharCode(66)) {
        decryptedString += "y";
    } else if (letter === String.fromCharCode(65)) {
        decryptedString += "z";
    }

    // for uppercase
    if (letter === String.fromCharCode(122)) {
        decryptedString += "A";
    } else if (letter === String.fromCharCode(121)) {
        decryptedString += "B";
    } else if (letter === String.fromCharCode(120)) {
        decryptedString += "C";
    } else if (letter === String.fromCharCode(119)) {
        decryptedString += "D";
    } else if (letter === String.fromCharCode(118)) {
        decryptedString += "E";
    } else if (letter === String.fromCharCode(117)) {
        decryptedString += "F";
    } else if (letter === String.fromCharCode(116)) {
        decryptedString += "G";
    } else if (letter === String.fromCharCode(115)) {
        decryptedString += "H";
    } else if (letter === String.fromCharCode(114)) {
        decryptedString += "I";
    } else if (letter === String.fromCharCode(113)) {
        decryptedString += "J";
    } else if (letter === String.fromCharCode(112)) {
        decryptedString += "K";
    } else if (letter === String.fromCharCode(111)) {
        decryptedString += "L";
    } else if (letter === String.fromCharCode(110)) {
        decryptedString += "M";
    } else if (letter === String.fromCharCode(109)) {
        decryptedString += "N";
    } else if (letter === String.fromCharCode(108)) {
        decryptedString += "O";
    } else if (letter === String.fromCharCode(107)) {
        decryptedString += "P";
    } else if (letter === String.fromCharCode(106)) {
        decryptedString += "Q";
    } else if (letter === String.fromCharCode(105)) {
        decryptedString += "R";
    } else if (letter === String.fromCharCode(104)) {
        decryptedString += "S";
    } else if (letter === String.fromCharCode(103)) {
        decryptedString += "T";
    } else if (letter === String.fromCharCode(102)) {
        decryptedString += "U";
    } else if (letter === String.fromCharCode(101)) {
        decryptedString += "V";
    } else if (letter === String.fromCharCode(100)) {
        decryptedString += "W";
    } else if (letter === String.fromCharCode(99)) {
        decryptedString += "X";
    } else if (letter === String.fromCharCode(98)) {
        decryptedString += "Y";
    } else if (letter === String.fromCharCode(97)) {
        decryptedString += "Z";
    }

    // for numbers
    if (letter === String.fromCharCode(255)) {
        decryptedString += "0";
    } else if (letter === String.fromCharCode(245)) {
        decryptedString += "1";
    } else if (letter === String.fromCharCode(227)) {
        decryptedString += "2";
    } else if (letter === String.fromCharCode(211)) {
        decryptedString += "3";
    } else if (letter === String.fromCharCode(199)) {
        decryptedString += "4";
    } else if (letter === String.fromCharCode(186)) {
        decryptedString += "5";
    } else if (letter === String.fromCharCode(172)) {
        decryptedString += "6";
    } else if (letter === String.fromCharCode(165)) {
        decryptedString += "7";
    } else if (letter === String.fromCharCode(154)) {
        decryptedString += "8";
    } else if (letter === String.fromCharCode(143)) {
        decryptedString += "9";
    }

    // for symbols (33-47)
    if (letter === String.fromCharCode(48)) {
        decryptedString += String.fromCharCode(33);
    } else if (letter === String.fromCharCode(57)) {
        decryptedString += String.fromCharCode(34);
    } else if (letter === String.fromCharCode(49)) {
        decryptedString += String.fromCharCode(35);
    } else if (letter === String.fromCharCode(142)) {
        decryptedString += String.fromCharCode(36);
    } else if (letter === String.fromCharCode(50)) {
        decryptedString += String.fromCharCode(37);
    } else if (letter === String.fromCharCode(159)) {
        decryptedString += String.fromCharCode(38);
    } else if (letter === String.fromCharCode(224)) {
        decryptedString += String.fromCharCode(39);
    } else if (letter === String.fromCharCode(51)) {
        decryptedString += String.fromCharCode(40);
    } else if (letter === String.fromCharCode(206)) {
        decryptedString += String.fromCharCode(41);
    } else if (letter === String.fromCharCode(52)) {
        decryptedString += String.fromCharCode(42);
    } else if (letter === String.fromCharCode(237)) {
        decryptedString += String.fromCharCode(43);
    } else if (letter === String.fromCharCode(53)) {
        decryptedString += String.fromCharCode(44);
    } else if (letter === String.fromCharCode(54)) {
        decryptedString += String.fromCharCode(45);
    } else if (letter === String.fromCharCode(55)) {
        decryptedString += String.fromCharCode(46);
    } else if (letter === String.fromCharCode(56)) {
        decryptedString += String.fromCharCode(47);
    }

    // for symbols (58-64)
    if (letter === String.fromCharCode(222)) {
        decryptedString += String.fromCharCode(58);
    } else if (letter === String.fromCharCode(47)) {
        decryptedString += String.fromCharCode(59);
    } else if (letter === String.fromCharCode(43)) {
        decryptedString += String.fromCharCode(60);
    } else if (letter === String.fromCharCode(45)) {
        decryptedString += String.fromCharCode(61);
    } else if (letter === String.fromCharCode(40)) {
        decryptedString += String.fromCharCode(62);
    } else if (letter === String.fromCharCode(33)) {
        decryptedString += String.fromCharCode(63);
    } else if (letter === String.fromCharCode(41)) {
        decryptedString += String.fromCharCode(64);
    }

    // for symbols (91-96)
    if (letter === String.fromCharCode(62)) {
        decryptedString += String.fromCharCode(91);
    } else if (letter === String.fromCharCode(59)) {
        decryptedString += String.fromCharCode(92);
    } else if (letter === String.fromCharCode(63)) {
        decryptedString += String.fromCharCode(93);
    } else if (letter === String.fromCharCode(58)) {
        decryptedString += String.fromCharCode(94);
    } else if (letter === String.fromCharCode(64)) {
        decryptedString += String.fromCharCode(95);
    } else if (letter === String.fromCharCode(62)) {
        decryptedString += String.fromCharCode(96);
    }

    // for symbols (123-126)
    if (letter === String.fromCharCode(94)) {
        decryptedString += String.fromCharCode(123);
    } else if (letter === String.fromCharCode(92)) {
        decryptedString += String.fromCharCode(124);
    } else if (letter === String.fromCharCode(95)) {
        decryptedString += String.fromCharCode(125);
    } else if (letter === String.fromCharCode(91)) {
        decryptedString += String.fromCharCode(126);
    }

    return decryptedString;
}
