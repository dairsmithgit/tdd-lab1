function translate(str) {
    str = str.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    for (let vowel of vowels) {
        if (str.startsWith(vowel) === true) {
            str = str + "way";
            return str;
        } else {
            return str;
        }
    }
    // translates string parameter into pig latin
}






module.exports = translate;
// pig latin:
// all consonants before first vowel move to end of word
    // add "ay" to end of word
// if word starts with vowel just add "way" to end

// hints:
// treat "y" as consonant (dont add to array of vowels)