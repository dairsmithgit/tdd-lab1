const translate = require("./index");

describe("translate function", () => {

    test("capital to lowercase", () => {
        let result = translate("Pop");
        expect(result).toEqual("pop");
    });
});


// test cases: start simple then get more complex
// tests for starting vowels (just adding "way")
// tests for starting vowels capitalized (convert to lowercase)
