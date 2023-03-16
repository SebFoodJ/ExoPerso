const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

console.log(latinToMorse.X)


function getLatinCharacterList(string){
    return string.split(' ')
}

function translateLatinCharacter(i){
    return latinToMorse[i];
}
function encode(str2){
    let upperStr = str2.toUpperCase();
    let upperStrArray = getLatinCharacterList(upperStr)
    let element = []
    upperStrArray.forEach(y => 
        element.push(translateLatinCharacter(y)));
return element
}

let x = getLatinCharacterList("Hello Wolrd");
let y = translateLatinCharacter("M");
let z = encode("Attention AdaTech School is coming");
console.log(x);
console.log(y);
console.log(z);


// let morse = {}
// for (const char in latinToMorse) {
//     morse += latinToMorse[i];

// return morse