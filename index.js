function translate(str) {
    str = str.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    const firstVowel = 0;
    vowels.forEach(function(vowel) {
        if (str.startsWith(vowel)) {
            str = str + "way";
        } else if (str.indexOf(vowels) > 0) {
            firstVowel = str.indexOf(vowels);
            const wordArray = str.split("");
            const cons = wordArray.splice(0, firstVowel);
            str = wordArray.push(cons);
            return str.join("") + "ay";
        }
    });
    return str;
    // translates string parameter into pig latin
}






module.exports = translate;
// pig latin:
// all consonants before first vowel move to end of word
    // add "ay" to end of word
// if word starts with vowel just add "way" to end

// hints:
// treat "y" as consonant (dont add to array of vowels)