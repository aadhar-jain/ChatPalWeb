export async function logicThree(rawLetter) {
    // apply logic third to raw_letter, append to encryptedString
    let encryptedString = "";

    // for lowercase
    if (rawLetter === String.fromCharCode(97)) {
        encryptedString += String.fromCharCode(90) + "%";
    } else if (rawLetter === String.fromCharCode(98)) {
        encryptedString += String.fromCharCode(89) + "%";
    } else if (rawLetter === String.fromCharCode(99)) {
        encryptedString += String.fromCharCode(88) + "%";
    } else if (rawLetter === String.fromCharCode(100)) {
        encryptedString += String.fromCharCode(87) + "%";
    } else if (rawLetter === String.fromCharCode(101)) {
        encryptedString += String.fromCharCode(86) + "%";
    } else if (rawLetter === String.fromCharCode(102)) {
        encryptedString += String.fromCharCode(85) + "%";
    } else if (rawLetter === String.fromCharCode(103)) {
        encryptedString += String.fromCharCode(84) + "%";
    } else if (rawLetter === String.fromCharCode(104)) {
        encryptedString += String.fromCharCode(83) + "%";
    } else if (rawLetter === String.fromCharCode(105)) {
        encryptedString += String.fromCharCode(82) + "%";
    } else if (rawLetter === String.fromCharCode(106)) {
        encryptedString += String.fromCharCode(81) + "%";
    } else if (rawLetter === String.fromCharCode(107)) {
        encryptedString += String.fromCharCode(80) + "%";
    } else if (rawLetter === String.fromCharCode(108)) {
        encryptedString += String.fromCharCode(79) + "%";
    } else if (rawLetter === String.fromCharCode(109)) {
        encryptedString += String.fromCharCode(78) + "%";
    } else if (rawLetter === String.fromCharCode(110)) {
        encryptedString += String.fromCharCode(77) + "%";
    } else if (rawLetter === String.fromCharCode(111)) {
        encryptedString += String.fromCharCode(76) + "%";
    } else if (rawLetter === String.fromCharCode(112)) {
        encryptedString += String.fromCharCode(75) + "%";
    } else if (rawLetter === String.fromCharCode(113)) {
        encryptedString += String.fromCharCode(74) + "%";
    } else if (rawLetter === String.fromCharCode(114)) {
        encryptedString += String.fromCharCode(73) + "%";
    } else if (rawLetter === String.fromCharCode(115)) {
        encryptedString += String.fromCharCode(72) + "%";
    } else if (rawLetter === String.fromCharCode(116)) {
        encryptedString += String.fromCharCode(71) + "%";
    } else if (rawLetter === String.fromCharCode(117)) {
        encryptedString += String.fromCharCode(70) + "%";
    } else if (rawLetter === String.fromCharCode(118)) {
        encryptedString += String.fromCharCode(69) + "%";
    } else if (rawLetter === String.fromCharCode(119)) {
        encryptedString += String.fromCharCode(68) + "%";
    } else if (rawLetter === String.fromCharCode(120)) {
        encryptedString += String.fromCharCode(67) + "%";
    } else if (rawLetter === String.fromCharCode(121)) {
        encryptedString += String.fromCharCode(66) + "%";
    } else if (rawLetter === String.fromCharCode(122)) {
        encryptedString += String.fromCharCode(65) + "%";
    }
    // for uppercase
    else if (rawLetter === String.fromCharCode(65)) {
        encryptedString += String.fromCharCode(122) + "%";
    } else if (rawLetter === String.fromCharCode(66)) {
        encryptedString += String.fromCharCode(121) + "%";
    } else if (rawLetter === String.fromCharCode(67)) {
        encryptedString += String.fromCharCode(120) + "%";
    } else if (rawLetter === String.fromCharCode(68)) {
        encryptedString += String.fromCharCode(119) + "%";
    } else if (rawLetter === String.fromCharCode(69)) {
        encryptedString += String.fromCharCode(118) + "%";
    } else if (rawLetter === String.fromCharCode(70)) {
        encryptedString += String.fromCharCode(117) + "%";
    } else if (rawLetter === String.fromCharCode(71)) {
        encryptedString += String.fromCharCode(116) + "%";
    } else if (rawLetter === String.fromCharCode(72)) {
        encryptedString += String.fromCharCode(115) + "%";
    } else if (rawLetter === String.fromCharCode(73)) {
        encryptedString += String.fromCharCode(114) + "%";
    } else if (rawLetter === String.fromCharCode(74)) {
        encryptedString += String.fromCharCode(113) + "%";
    } else if (rawLetter === String.fromCharCode(75)) {
        encryptedString += String.fromCharCode(112) + "%";
    } else if (rawLetter === String.fromCharCode(76)) {
        encryptedString += String.fromCharCode(111) + "%";
    } else if (rawLetter === String.fromCharCode(77)) {
        encryptedString += String.fromCharCode(110) + "%";
    } else if (rawLetter === String.fromCharCode(78)) {
        encryptedString += String.fromCharCode(109) + "%";
    } else if (rawLetter === String.fromCharCode(79)) {
        encryptedString += String.fromCharCode(108) + "%";
    } else if (rawLetter === String.fromCharCode(80)) {
        encryptedString += String.fromCharCode(107) + "%";
    } else if (rawLetter === String.fromCharCode(81)) {
        encryptedString += String.fromCharCode(106) + "%";
    } else if (rawLetter === String.fromCharCode(82)) {
        encryptedString += String.fromCharCode(105) + "%";
    } else if (rawLetter === String.fromCharCode(83)) {
        encryptedString += String.fromCharCode(104) + "%";
    } else if (rawLetter === String.fromCharCode(84)) {
        encryptedString += String.fromCharCode(103) + "%";
    } else if (rawLetter === String.fromCharCode(85)) {
        encryptedString += String.fromCharCode(102) + "%";
    } else if (rawLetter === String.fromCharCode(86)) {
        encryptedString += String.fromCharCode(101) + "%";
    } else if (rawLetter === String.fromCharCode(87)) {
        encryptedString += String.fromCharCode(100) + "%";
    } else if (rawLetter === String.fromCharCode(88)) {
        encryptedString += String.fromCharCode(99) + "%";
    } else if (rawLetter === String.fromCharCode(89)) {
        encryptedString += String.fromCharCode(98) + "%";
    } else if (rawLetter === String.fromCharCode(90)) {
        encryptedString += String.fromCharCode(97) + "%";
    }
    // for numbers
    else if (rawLetter === String.fromCharCode(48)) {
        encryptedString += String.fromCharCode(255) + "%";
    } else if (rawLetter === String.fromCharCode(49)) {
        encryptedString += String.fromCharCode(245) + "%";
    } else if (rawLetter === String.fromCharCode(50)) {
        encryptedString += String.fromCharCode(227) + "%";
    } else if (rawLetter === String.fromCharCode(51)) {
        encryptedString += String.fromCharCode(211) + "%";
    } else if (rawLetter === String.fromCharCode(52)) {
        encryptedString += String.fromCharCode(199) + "%";
    } else if (rawLetter === String.fromCharCode(53)) {
        encryptedString += String.fromCharCode(186) + "%";
    } else if (rawLetter === String.fromCharCode(54)) {
        encryptedString += String.fromCharCode(172) + "%";
    } else if (rawLetter === String.fromCharCode(55)) {
        encryptedString += String.fromCharCode(165) + "%";
    } else if (rawLetter === String.fromCharCode(56)) {
        encryptedString += String.fromCharCode(154) + "%";
    } else if (rawLetter === String.fromCharCode(57)) {
        encryptedString += String.fromCharCode(143) + "%";
    }
    // for remaining symbols intervals
    // 33-47
    else if (rawLetter === String.fromCharCode(33)) {
        encryptedString += String.fromCharCode(48) + "%";
    } else if (rawLetter === String.fromCharCode(34)) {
        encryptedString += String.fromCharCode(57) + "%";
    } else if (rawLetter === String.fromCharCode(35)) {
        encryptedString += String.fromCharCode(49) + "%";
    } else if (rawLetter === String.fromCharCode(36)) {
        encryptedString += String.fromCharCode(142) + "%";
    } else if (rawLetter === String.fromCharCode(37)) {
        encryptedString += String.fromCharCode(50) + "%";
    } else if (rawLetter === String.fromCharCode(38)) {
        encryptedString += String.fromCharCode(159) + "%";
    } else if (rawLetter === String.fromCharCode(39)) {
        encryptedString += String.fromCharCode(224) + "%";
    } else if (rawLetter === String.fromCharCode(40)) {
        encryptedString += String.fromCharCode(51) + "%";
    } else if (rawLetter === String.fromCharCode(41)) {
        encryptedString += String.fromCharCode(206) + "%";
    } else if (rawLetter === String.fromCharCode(42)) {
        encryptedString += String.fromCharCode(52) + "%";
    } else if (rawLetter === String.fromCharCode(43)) {
        encryptedString += String.fromCharCode(237) + "%";
    } else if (rawLetter === String.fromCharCode(44)) {
        encryptedString += String.fromCharCode(53) + "%";
    } else if (rawLetter === String.fromCharCode(45)) {
        encryptedString += String.fromCharCode(54) + "%";
    } else if (rawLetter === String.fromCharCode(46)) {
        encryptedString += String.fromCharCode(55) + "%";
    } else if (rawLetter === String.fromCharCode(47)) {
        encryptedString += String.fromCharCode(56) + "%";
    }
    // 58-64
    else if (rawLetter === String.fromCharCode(58)) {
        encryptedString += String.fromCharCode(222) + "%";
    } else if (rawLetter === String.fromCharCode(59)) {
        encryptedString += String.fromCharCode(47) + "%";
    } else if (rawLetter === String.fromCharCode(60)) {
        encryptedString += String.fromCharCode(43) + "%";
    } else if (rawLetter === String.fromCharCode(61)) {
        encryptedString += String.fromCharCode(45) + "%";
    } else if (rawLetter === String.fromCharCode(62)) {
        encryptedString += String.fromCharCode(40) + "%";
    } else if (rawLetter === String.fromCharCode(63)) {
        encryptedString += String.fromCharCode(33) + "%";
    } else if (rawLetter === String.fromCharCode(64)) {
        encryptedString += String.fromCharCode(41) + "%";
    }
    // 91-96
    else if (rawLetter === String.fromCharCode(91)) {
        encryptedString += String.fromCharCode(62) + "%";
    } else if (rawLetter === String.fromCharCode(92)) {
        encryptedString += String.fromCharCode(59) + "%";
    } else if (rawLetter === String.fromCharCode(93)) {
        encryptedString += String.fromCharCode(63) + "%";
    } else if (rawLetter === String.fromCharCode(94)) {
        encryptedString += String.fromCharCode(58) + "%";
    } else if (rawLetter === String.fromCharCode(95)) {
        encryptedString += String.fromCharCode(64) + "%";
    } else if (rawLetter === String.fromCharCode(96)) {
        encryptedString += String.fromCharCode(62) + "%";
    }
    // 123-126
    else if (rawLetter === String.fromCharCode(123)) {
        encryptedString += String.fromCharCode(94) + "%";
    } else if (rawLetter === String.fromCharCode(124)) {
        encryptedString += String.fromCharCode(92) + "%";
    } else if (rawLetter === String.fromCharCode(125)) {
        encryptedString += String.fromCharCode(95) + "%";
    } else if (rawLetter === String.fromCharCode(126)) {
        encryptedString += String.fromCharCode(91) + "%";
    }
    // end of logic 3
    return encryptedString;
}
