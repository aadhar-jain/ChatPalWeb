export async function logic2(letter) {
    let decryptedString = "";

    // for lowercase
    if (letter === String.fromCharCode(253)) {
        decryptedString += "a";
    } else if (letter === String.fromCharCode(247)) {
        decryptedString += "b";
    } else if (letter === String.fromCharCode(245)) {
        decryptedString += "c";
    } else if (letter === String.fromCharCode(235)) {
        decryptedString += "d";
    } else if (letter === String.fromCharCode(230)) {
        decryptedString += "e";
    } else if (letter === String.fromCharCode(229)) {
        decryptedString += "f";
    } else if (letter === String.fromCharCode(200)) {
        decryptedString += "g";
    } else if (letter === String.fromCharCode(206)) {
        decryptedString += "h";
    } else if (letter === String.fromCharCode(185)) {
        decryptedString += "i";
    } else if (letter === String.fromCharCode(191)) {
        decryptedString += "j";
    } else if (letter === String.fromCharCode(175)) {
        decryptedString += "k";
    } else if (letter === String.fromCharCode(171)) {
        decryptedString += "l";
    } else if (letter === String.fromCharCode(161)) {
        decryptedString += "m";
    } else if (letter === String.fromCharCode(159)) {
        decryptedString += "n";
    } else if (letter === String.fromCharCode(154)) {
        decryptedString += "o";
    } else if (letter === String.fromCharCode(146)) {
        decryptedString += "p";
    } else if (letter === String.fromCharCode(143)) {
        decryptedString += "q";
    } else if (letter === String.fromCharCode(128)) {
        decryptedString += "r";
    } else if (letter === String.fromCharCode(125)) {
        decryptedString += "s";
    } else if (letter === String.fromCharCode(100)) {
        decryptedString += "t";
    } else if (letter === String.fromCharCode(97)) {
        decryptedString += "u";
    } else if (letter === String.fromCharCode(91)) {
        decryptedString += "v";
    } else if (letter === String.fromCharCode(80)) {
        decryptedString += "w";
    } else if (letter === String.fromCharCode(66)) {
        decryptedString += "x";
    } else if (letter === String.fromCharCode(64)) {
        decryptedString += "y";
    } else if (letter === String.fromCharCode(59)) {
        decryptedString += "z";
    }

    // for uppercase
    if (letter === String.fromCharCode(255)) {
        decryptedString += "A";
    } else if (letter === String.fromCharCode(251)) {
        decryptedString += "B";
    } else if (letter === String.fromCharCode(244)) {
        decryptedString += "C";
    } else if (letter === String.fromCharCode(240)) {
        decryptedString += "D";
    } else if (letter === String.fromCharCode(236)) {
        decryptedString += "E";
    } else if (letter === String.fromCharCode(224)) {
        decryptedString += "F";
    } else if (letter === String.fromCharCode(219)) {
        decryptedString += "G";
    } else if (letter === String.fromCharCode(208)) {
        decryptedString += "H";
    } else if (letter === String.fromCharCode(201)) {
        decryptedString += "I";
    } else if (letter === String.fromCharCode(186)) {
        decryptedString += "J";
    } else if (letter === String.fromCharCode(172)) {
        decryptedString += "K";
    } else if (letter === String.fromCharCode(174)) {
        decryptedString += "L";
    } else if (letter === String.fromCharCode(168)) {
        decryptedString += "M";
    } else if (letter === String.fromCharCode(165)) {
        decryptedString += "N";
    } else if (letter === String.fromCharCode(158)) {
        decryptedString += "O";
    } else if (letter === String.fromCharCode(148)) {
        decryptedString += "P";
    } else if (letter === String.fromCharCode(145)) {
        decryptedString += "Q";
    } else if (letter === String.fromCharCode(135)) {
        decryptedString += "R";
    } else if (letter === String.fromCharCode(127)) {
        decryptedString += "S";
    } else if (letter === String.fromCharCode(119)) {
        decryptedString += "T";
    } else if (letter === String.fromCharCode(94)) {
        decryptedString += "U";
    } else if (letter === String.fromCharCode(93)) {
        decryptedString += "V";
    } else if (letter === String.fromCharCode(84)) {
        decryptedString += "W";
    } else if (letter === String.fromCharCode(63)) {
        decryptedString += "X";
    } else if (letter === String.fromCharCode(47)) {
        decryptedString += "Y";
    } else if (letter === String.fromCharCode(42)) {
        decryptedString += "Z";
    }

    // for numbers
    if (letter === String.fromCharCode(252)) {
        decryptedString += "0";
    } else if (letter === String.fromCharCode(243)) {
        decryptedString += "1";
    } else if (letter === String.fromCharCode(226)) {
        decryptedString += "2";
    } else if (letter === String.fromCharCode(190)) {
        decryptedString += "3";
    } else if (letter === String.fromCharCode(179)) {
        decryptedString += "4";
    } else if (letter === String.fromCharCode(164)) {
        decryptedString += "5";
    } else if (letter === String.fromCharCode(153)) {
        decryptedString += "6";
    } else if (letter === String.fromCharCode(144)) {
        decryptedString += "7";
    } else if (letter === String.fromCharCode(118)) {
        decryptedString += "8";
    } else if (letter === String.fromCharCode(53)) {
        decryptedString += "9";
    }

    // for symbols (33-47)
    if (letter === String.fromCharCode(246)) {
        decryptedString += String.fromCharCode(33);
    } else if (letter === String.fromCharCode(227)) {
        decryptedString += String.fromCharCode(34);
    } else if (letter === String.fromCharCode(197)) {
        decryptedString += String.fromCharCode(35);
    } else if (letter === String.fromCharCode(156)) {
        decryptedString += String.fromCharCode(36);
    } else if (letter === String.fromCharCode(131)) {
        decryptedString += String.fromCharCode(37);
    } else if (letter === String.fromCharCode(126)) {
        decryptedString += String.fromCharCode(38);
    } else if (letter === String.fromCharCode(122)) {
        decryptedString += String.fromCharCode(39);
    } else if (letter === String.fromCharCode(107)) {
        decryptedString += String.fromCharCode(40);
    } else if (letter === String.fromCharCode(102)) {
        decryptedString += String.fromCharCode(41);
    } else if (letter === String.fromCharCode(90)) {
        decryptedString += String.fromCharCode(42);
    } else if (letter === String.fromCharCode(79)) {
        decryptedString += String.fromCharCode(43);
    } else if (letter === String.fromCharCode(76)) {
        decryptedString += String.fromCharCode(44);
    } else if (letter === String.fromCharCode(71)) {
        decryptedString += String.fromCharCode(45);
    } else if (letter === String.fromCharCode(65)) {
        decryptedString += String.fromCharCode(46);
    } else if (letter === String.fromCharCode(55)) {
        decryptedString += String.fromCharCode(47);
    }

    // for symbols (58-64)
    if (letter === String.fromCharCode(239)) {
        decryptedString += String.fromCharCode(58);
    } else if (letter === String.fromCharCode(222)) {
        decryptedString += String.fromCharCode(59);
    } else if (letter === String.fromCharCode(123)) {
        decryptedString += String.fromCharCode(60);
    } else if (letter === String.fromCharCode(114)) {
        decryptedString += String.fromCharCode(61);
    } else if (letter === String.fromCharCode(86)) {
        decryptedString += String.fromCharCode(62);
    } else if (letter === String.fromCharCode(69)) {
        decryptedString += String.fromCharCode(63);
    } else if (letter === String.fromCharCode(56)) {
        decryptedString += String.fromCharCode(64);
    }

    // for symbols (91-96)
    if (letter === String.fromCharCode(61)) {
        decryptedString += String.fromCharCode(91);
    } else if (letter === String.fromCharCode(111)) {
        decryptedString += String.fromCharCode(92);
    } else if (letter === String.fromCharCode(48)) {
        decryptedString += String.fromCharCode(93);
    } else if (letter === String.fromCharCode(74)) {
        decryptedString += String.fromCharCode(94);
    } else if (letter === String.fromCharCode(75)) {
        decryptedString += String.fromCharCode(95);
    } else if (letter === String.fromCharCode(72)) {
        decryptedString += String.fromCharCode(96);
    }

    // for symbols (123-126)
    if (letter === String.fromCharCode(43)) {
        decryptedString += String.fromCharCode(123);
    } else if (letter === String.fromCharCode(61)) {
        decryptedString += String.fromCharCode(124);
    } else if (letter === String.fromCharCode(109)) {
        decryptedString += String.fromCharCode(125);
    } else if (letter === String.fromCharCode(62)) {
        decryptedString += String.fromCharCode(126);
    }

    return decryptedString;
}
