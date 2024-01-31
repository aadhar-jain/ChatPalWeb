export async function logic1(letter) {
    let decryptedString = "";

    // for lowercase
    if (letter === String.fromCharCode(34)) {
        decryptedString += "a";
    } else if (letter === String.fromCharCode(39)) {
        decryptedString += "b";
    } else if (letter === String.fromCharCode(42)) {
        decryptedString += "c";
    } else if (letter === String.fromCharCode(45)) {
        decryptedString += "d";
    } else if (letter === String.fromCharCode(55)) {
        decryptedString += "e";
    } else if (letter === String.fromCharCode(58)) {
        decryptedString += "f";
    } else if (letter === String.fromCharCode(60)) {
        decryptedString += "g";
    } else if (letter === String.fromCharCode(63)) {
        decryptedString += "h";
    } else if (letter === String.fromCharCode(64)) {
        decryptedString += "i";
    } else if (letter === String.fromCharCode(69)) {
        decryptedString += "j";
    } else if (letter === String.fromCharCode(79)) {
        decryptedString += "k";
    } else if (letter === String.fromCharCode(87)) {
        decryptedString += "l";
    } else if (letter === String.fromCharCode(92)) {
        decryptedString += "m";
    } else if (letter === String.fromCharCode(95)) {
        decryptedString += "n";
    } else if (letter === String.fromCharCode(96)) {
        decryptedString += "o";
    } else if (letter === String.fromCharCode(100)) {
        decryptedString += "p";
    } else if (letter === String.fromCharCode(105)) {
        decryptedString += "q";
    } else if (letter === String.fromCharCode(123)) {
        decryptedString += "r";
    } else if (letter === String.fromCharCode(127)) {
        decryptedString += "s";
    } else if (letter === String.fromCharCode(131)) {
        decryptedString += "t";
    } else if (letter === String.fromCharCode(155)) {
        decryptedString += "u";
    } else if (letter === String.fromCharCode(175)) {
        decryptedString += "v";
    } else if (letter === String.fromCharCode(191)) {
        decryptedString += "w";
    } else if (letter === String.fromCharCode(168)) {
        decryptedString += "x";
    } else if (letter === String.fromCharCode(142)) {
        decryptedString += "y";
    } else if (letter === String.fromCharCode(240)) {
        decryptedString += "z";
    }

    // for uppercase
    if (letter === String.fromCharCode(33)) {
        decryptedString += "A";
    } else if (letter === String.fromCharCode(40)) {
        decryptedString += "B";
    } else if (letter === String.fromCharCode(49)) {
        decryptedString += "C";
    } else if (letter === String.fromCharCode(65)) {
        decryptedString += "D";
    } else if (letter === String.fromCharCode(90)) {
        decryptedString += "E";
    } else if (letter === String.fromCharCode(94)) {
        decryptedString += "F";
    } else if (letter === String.fromCharCode(107)) {
        decryptedString += "G";
    } else if (letter === String.fromCharCode(115)) {
        decryptedString += "H";
    } else if (letter === String.fromCharCode(124)) {
        decryptedString += "I";
    } else if (letter === String.fromCharCode(126)) {
        decryptedString += "J";
    } else if (letter === String.fromCharCode(128)) {
        decryptedString += "K";
    } else if (letter === String.fromCharCode(140)) {
        decryptedString += "L";
    } else if (letter === String.fromCharCode(158)) {
        decryptedString += "M";
    } else if (letter === String.fromCharCode(206)) {
        decryptedString += "N";
    } else if (letter === String.fromCharCode(217)) {
        decryptedString += "O";
    } else if (letter === String.fromCharCode(239)) {
        decryptedString += "P";
    } else if (letter === String.fromCharCode(224)) {
        decryptedString += "Q";
    } else if (letter === String.fromCharCode(228)) {
        decryptedString += "R";
    } else if (letter === String.fromCharCode(234)) {
        decryptedString += "S";
    } else if (letter === String.fromCharCode(236)) {
        decryptedString += "T";
    } else if (letter === String.fromCharCode(242)) {
        decryptedString += "U";
    } else if (letter === String.fromCharCode(247)) {
        decryptedString += "V";
    } else if (letter === String.fromCharCode(252)) {
        decryptedString += "W";
    } else if (letter === String.fromCharCode(255)) {
        decryptedString += "X";
    } else if (letter === String.fromCharCode(159)) {
        decryptedString += "Y";
    } else if (letter === String.fromCharCode(174)) {
        decryptedString += "Z";
    }

    // for numbers
    if (letter === String.fromCharCode(71)) {
        decryptedString += "0";
    } else if (letter === String.fromCharCode(82)) {
        decryptedString += "1";
    } else if (letter === String.fromCharCode(93)) {
        decryptedString += "2";
    } else if (letter === String.fromCharCode(891)) {
        decryptedString += "3";
    } else if (letter === String.fromCharCode(125)) {
        decryptedString += "4";
    } else if (letter === String.fromCharCode(130)) {
        decryptedString += "5";
    } else if (letter === String.fromCharCode(161)) {
        decryptedString += "6";
    } else if (letter === String.fromCharCode(203)) {
        decryptedString += "7";
    } else if (letter === String.fromCharCode(219)) {
        decryptedString += "8";
    } else if (letter === String.fromCharCode(254)) {
        decryptedString += "9";
    }

    // for symbols (33-47)
    if (letter === String.fromCharCode(47)) {
        decryptedString += String.fromCharCode(33);
    } else if (letter === String.fromCharCode(56)) {
        decryptedString += String.fromCharCode(34);
    } else if (letter === String.fromCharCode(73)) {
        decryptedString += String.fromCharCode(35);
    } else if (letter === String.fromCharCode(85)) {
        decryptedString += String.fromCharCode(36);
    } else if (letter === String.fromCharCode(104)) {
        decryptedString += String.fromCharCode(37);
    } else if (letter === String.fromCharCode(91)) {
        decryptedString += String.fromCharCode(38);
    } else if (letter === String.fromCharCode(135)) {
        decryptedString += String.fromCharCode(39);
    } else if (letter === String.fromCharCode(205)) {
        decryptedString += String.fromCharCode(40);
    } else if (letter === String.fromCharCode(207)) {
        decryptedString += String.fromCharCode(41);
    } else if (letter === String.fromCharCode(221)) {
        decryptedString += String.fromCharCode(42);
    } else if (letter === String.fromCharCode(243)) {
        decryptedString += String.fromCharCode(43);
    } else if (letter === String.fromCharCode(233)) {
        decryptedString += String.fromCharCode(44);
    } else if (letter === String.fromCharCode(227)) {
        decryptedString += String.fromCharCode(45);
    } else if (letter === String.fromCharCode(143)) {
        decryptedString += String.fromCharCode(46);
    } else if (letter === String.fromCharCode(238)) {
        decryptedString += String.fromCharCode(47);
    }

    // for symbols (58-64)
    if (letter === String.fromCharCode(44)) {
        decryptedString += String.fromCharCode(58);
    } else if (letter === String.fromCharCode(53)) {
        decryptedString += String.fromCharCode(59);
    } else if (letter === String.fromCharCode(66)) {
        decryptedString += String.fromCharCode(60);
    } else if (letter === String.fromCharCode(84)) {
        decryptedString += String.fromCharCode(61);
    } else if (letter === String.fromCharCode(108)) {
        decryptedString += String.fromCharCode(62);
    } else if (letter === String.fromCharCode(121)) {
        decryptedString += String.fromCharCode(63);
    } else if (letter === String.fromCharCode(144)) {
        decryptedString += String.fromCharCode(64);
    }

    // for symbols (91-96)
    if (letter === String.fromCharCode(59)) {
        decryptedString += String.fromCharCode(91);
    } else if (letter === String.fromCharCode(74)) {
        decryptedString += String.fromCharCode(92);
    } else if (letter === String.fromCharCode(99)) {
        decryptedString += String.fromCharCode(93);
    } else if (letter === String.fromCharCode(180)) {
        decryptedString += String.fromCharCode(94);
    } else if (letter === String.fromCharCode(196)) {
        decryptedString += String.fromCharCode(95);
    } else if (letter === String.fromCharCode(245)) {
        decryptedString += String.fromCharCode(96);
    }

    // for symbols (123-126)
    if (letter === String.fromCharCode(48)) {
        decryptedString += String.fromCharCode(123);
    } else if (letter === String.fromCharCode(57)) {
        decryptedString += String.fromCharCode(124);
    } else if (letter === String.fromCharCode(171)) {
        decryptedString += String.fromCharCode(125);
    } else if (letter === String.fromCharCode(172)) {
        decryptedString += String.fromCharCode(126);
    }

    return decryptedString;
}
