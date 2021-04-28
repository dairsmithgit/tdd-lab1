function translate(str) {
  str = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (str.match(/[^aeiou]/)) {
    vowels.forEach(function (vowel) {
      if (str.startsWith(vowel)) {
        str = str + "way";
      }
    });
  } else {
    var moveCons = "";
    while (str.slice(0, 1).match(/[^aeiou]/)) {
      moveCons += str.slice(0, 1);
      str = str.slice(1, str.length);
    }
    str = str + moveCons + "ay";
    return str;
  }
  return str;
  // translates string parameter into pig latin
}

// function consFunction(str) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     const wordArray = str.split("");
//     vowels.forEach(function(vowel) {
//         const firstVowel = wordArray.indexOf(vowel);
//         const cons = wordArray.splice(0, firstVowel);
//         str = wordArray.push(cons);
//         str = str.join("");
//         str = str + "ay";
//         return str;
//     });
//     // const wordArray = str.split("");
//     // const firstVowel = wordArray.indexOf(vowels);
//     // const cons = wordArray.splice(0, firstVowel);
//     // str = wordArray.push(cons);
//     // return str.join("") + "ay";
// }

module.exports = translate;
// pig latin:
// all consonants before first vowel move to end of word
// add "ay" to end of word
// if word starts with vowel just add "way" to end

// hints:
// treat "y" as consonant (dont add to array of vowels)
