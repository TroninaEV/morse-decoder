const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const regExp = /\**\*/;
    let str = expr.split(regExp);
    let resStr = "";
    let symbolStr;
    let word;
    
    for (let i =0; i< str.length; i++){
        word = "";
        symbolStr = "";
        for (let j =0; j<str[i].length; j++){
             if( +str[i].charAt(j) && +str[i].charAt(j+1)){
                symbolStr = symbolStr + "-";
            } 
            else if (+str[i].charAt(j) || +str[i].charAt(j+1)){
                symbolStr = symbolStr + ".";
            }
            console.log((j+1)%10);
            if ( (j+2)%10===0){
                word = word + MORSE_TABLE[symbolStr];
                symbolStr ="";
            }
            j++;
         }
        resStr = resStr +" "+ word;
    }
    return resStr.trim();
}

module.exports = {
    decode
}
