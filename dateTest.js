'use strict'

let MORSE_CODE = { '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS' }

  function decodeMorse (morseCode){

    let dict = Object.entries(MORSE_CODE)
    let words = morseCode.split('   ')
    let decodedLetters = []
    let decodedWords = []
    let decoded = []
    console.log(words)
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split(' ')
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < dict.length; k++) {
                if (letters[j] === dict[k][0]) {
                    decodedLetters.push(MORSE_CODE[letters[j]])
                }
            }
        }
        decodedWords.push(decodedLetters.join(''))
        decodedLetters = []
        decoded = decodedWords.join(' ')
    }
    return decoded
  
  }
  console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))

