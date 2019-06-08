import { expect } from 'chai';
import { functionParser } from '../src/JSONTools';

describe("function parser", () => {
    var funcs = [];
    funcs.push({ full: "function() {}", args:[], name: undefined, body: undefined});
    funcs.push({ full: "function() {var a = function (){}; return a + b}", args: [], name: undefined, body: "var a = function (){}; return a + b" });
    funcs.push({ full: "function(a, b) {var a = function (){}; return a + b}", args: ["a", "b"], name: undefined, body: "var a = function (){}; return a + b" });
    funcs.push({ full: "function test   (a, b) {var a = function (){}; return a + b}", args: ["a", "b"], name: "test", body: "var a = function (){}; return a + b" });
    funcs.push({ full: "function anonymous (name, surname) {\r\n    console.log(`${this.name} says hi ${name} ${surname}!`);  \r\n  }", args: ["name", "surname"], name: "anonymous", body: "\r\n    console.log(`${this.name} says hi ${name} ${surname}!`);  \r\n  " });

    funcs.map(data => {
        it(data.full, () => {
            var result = functionParser(data.full);
            expect(result.name).to.eql(data.name);
            expect(result).to.eql(data);
        });
    });

    it("incorrect function", () => {
        var result = functionParser("fun ction() {}");
        expect(result).to.eql(undefined);
    });
});