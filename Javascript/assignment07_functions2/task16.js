"use strict";

function teaOracle(temp, wind, arMiegojo) {
  if (temp < 10 || (temp < 13 && wind > 5 && !arMiegojo)) {
    return "Karšta arbata privaloma!";
  } else if (temp > 15 && wind <= 5 && arMiegojo) {
    return "Gal šalta arbata?";
  } else {
    return "Arbata pagal nuotaiką";
  }
}
