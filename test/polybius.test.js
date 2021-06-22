// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("polybius", () => {
    it("should should return '42' for the letter 'i' when encoding.", () => {
        expect(polybius("i")).to.be.eql("42");
    });
    it("should should return '42' for the letter 'j' when encoding.", () => {
        expect(polybius("j")).to.be.eql("42");
    });
    it("should should return '(i/j)' for the value '42' when decoding.", () => {
        expect(polybius("42", false)).to.be.eql("(i/j)");
    });
    it("should encode capital letters the same way it would lower case letters.", () => {
        expect(polybius("Message")).to.be.eql("23513434112251");
    });
    it("should maintain spaces in the message after encoding.", () => {
        expect(polybius("a message")).to.be.eql("11 23513434112251");
    });
    it("should maintain spaces in the message after decoding.", () => {
        expect(polybius("11 23513434112251", false)).to.be.eql("a message");
    });
})