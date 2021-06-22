// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("substitution", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        expect(substitution("message", "plmoknijbuhvygctfxrdzeswa")).to.be.false;
    });
    it("should correctly translate the given phrase based on the alphabet provided", () => {
        expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).to.be.eql("ykrrpik");
    });
    it("should return false if there are any duplicate characters in the given alphabet", () => {
        expect(substitution("message", "plmoknijbuhvygctfxrdzeswaa")).to.be.false;
    });
    it("should maintain spaces in the message after encoding", () => {
        expect(substitution("a message", "plmoknijbuhvygctfxrdzeswaq")).to.be.eql("p ykrrpik");
    });
    it("should maintain spaces in the message after decoding", () => {
        expect(substitution("p ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false)).to.be.eql("a message");
    });
    it("should encode capital letters the same way it would lower case letters.", () => {
        expect(substitution("A Message", "plmoknijbuhvygctfxrdzeswaq")).to.be.eql("p ykrrpik");
    });
})