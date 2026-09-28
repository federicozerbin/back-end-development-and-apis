function getUpperCase(str){
    return str.toUpperCase();
}

function getLowerCase(str){
    return str.toLowerCase();
}

function getSentenceCase(str){
    let firtsLetter = str.at(0);
    let restOf = str.substring(1, str.length);
    return getUpperCase(firtsLetter).concat(getLowerCase(restOf));
}

function getProperCase(str){
    str = getSentenceCase(str);
    return str.replace(/ ([a-z])/g, function (_, letter) {
    return ' ' + getUpperCase(letter);
  });
}

module.exports = {getUpperCase, getLowerCase, getSentenceCase, getProperCase}