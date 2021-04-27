const translate = require("./index");

describe("translate function", () => {

    test("capital to lowercase", () => {
        let result = translate("Pop");
        expect(result).toEqual("pop");
    });

    test("uppercase word to lowercase", () => {
        let result = translate("POPPY");
        expect(result).toEqual("poppy");
    });

    test("start with vowel a", () => {
        let result = translate("argon");
        expect(result).toEqual("argonway");
    });

    test("start with vowel A capital", () => {
        let result = translate("Argon");
        expect(result).toEqual("argonway");
    });

    test("starts with e", () => {
        let result = translate("eat");
        expect(result).toEqual("eatway");
    });

    test("starts with u", () => {
        let result = translate("under");
        expect(result).toEqual("underway");
    });

    test("starts with consonants", () => {
        let result = translate("tree");
        expect(result).toEqual("eetray");
    });

    test("starts with consonants capital", () => {
        let result = translate("Tree");
        expect(result).toEqual("eetray");
    });

    test("first vowel in through", () => {
        let result = translate("through");
        expect(result).toEqual("oughthray");
    });

    test("first vowel in play", () => {
        let result = translate("play");
        expect(result).toEqual("ayplay");
    });

    test("word with no vowels", () => {
        let result = translate("my");
        expect(result).toEqual("myay");
    });
});


// test cases: start simple then get more complex
// tests for starting vowels (just adding "way")
// tests for starting vowels capitalized (convert to lowercase)
