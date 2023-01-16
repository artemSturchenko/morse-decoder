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
    '':' '
};

function decode(expr) {
    let resultWord = ''
    const arr = expr.match(/.{1,10}/g)
    const resArr = []
    for (let q = 0; q < arr.length; q++) {
        const newArr = arr[q].match(/.{1,2}/g)
        const charArray = []
        for (let z = 0; z < newArr.length; z++) {
            if (newArr[z] == '10') {
                charArray.push('.')
            } else if (newArr[z] == '11') {
                charArray.push('-')
            }
        }
        resArr.push(charArray.join(''))
    }
    for(let q = 0;q<resArr.length;q++){
        resultWord += MORSE_TABLE[resArr[q]]
    }
    return resultWord
}

module.exports = {
    decode
}
