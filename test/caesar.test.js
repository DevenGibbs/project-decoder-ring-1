// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("caesar", () => {
    it("should return false if the shift value is equal to 0.", () => {
        expect(caesar("thinkful", 0)).to.be.false;
    });
    it("should return false if the shift value is less than -25.", () => {
        expect(caesar("thinkful", -26)).to.be.false;
    });
    it("should return false if the shift value is greater than 25.", () => {
        expect(caesar("thinkful", 26)).to.be.false;
    });
    it("should return false if the shift value is not present.", () => {
        expect(caesar("thinkful")).to.be.false;
    });
    it("should encode capital letters the same way it would lower case letters.", () => {
        expect(caesar("A Message", 3)).to.be.eql("d phvvdjh");
    });
    it("should be able to handle shifts that go past the end of the alphabet when encoding.", () => {
        expect(caesar("Zebra Magazine", 3)).to.be.eql("cheud pdjdclqh");
    });
    it("should maintain spaces and other nonalphabetic symbols in the message when encoding.", () => {
        expect(caesar("Zebra Magazine!", 3)).to.be.eql("cheud pdjdclqh!");
    });
})