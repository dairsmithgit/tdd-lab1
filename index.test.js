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

    test("start with vowel", () => {
        let result = translate("argon");
        expect(result).toEqual("argonway");
    });

    test("start with vowel", () => {
        let result = translate("Argon");
        expect(result).toEqual("argonway");
    });
});


// test cases: start simple then get more complex
// tests for starting vowels (just adding "way")
// tests for starting vowels capitalized (convert to lowercase)
