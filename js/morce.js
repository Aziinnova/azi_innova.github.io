 function convertToMorse() {
      const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
      };

      const inputText = document.getElementById('inputText').value.toUpperCase();
      let morseResult = '';

      for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i);
        if (morseCode.hasOwnProperty(char)) {
          morseResult += morseCode[char] + ' ';
        } else {
          morseResult += ' / ';
        }
      }

      document.getElementById('morseResult').value = morseResult.trim();
    }
