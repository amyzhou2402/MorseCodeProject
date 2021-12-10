describe("Testing Translator", () => {
    it("Should translate english", () => {
        expect(textToMorse("hello")).toBe(".... . .-.. .-.. ---");
        expect(textToMorse("hello")).toBe("-- -.-- / -. .- -- . / .. ...");
        expect(textToMorse("hello")).toBe(".- -- -.--");
    });
    it("Should translate morse", () => {
        expect(morseCodeToText(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
            "hello world"
        );
    });
    it("Should handle numbers", () => {
        expect(textToMorse("I am 20")), toBe(".. / .- -- / ..--- -----");
    });
    it("Should be able to handle multiple spaces", () => {
        expect(textToMorse("hello  doublespace")), toBe(".... . .-.. .-.. --- / / -.. --- ..- -... .-.. . ... .--. .- -.-. .");
    });
    it("Should throw error if input is empty string", () => {
        expect(() => textToMorse("")).toThrow();
    }); //catching errors need another arrow function inside

});
