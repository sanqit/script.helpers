"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var JSONTools_1 = require("../src/JSONTools");
describe("function parser", function () {
    var funcs = [];
    funcs.push({ full: "function() {}", args: [], name: undefined, body: undefined });
    funcs.push({ full: "function() {var a = function (){}; return a + b}", args: [], name: undefined, body: "var a = function (){}; return a + b" });
    funcs.push({ full: "function(a, b) {var a = function (){}; return a + b}", args: ["a", "b"], name: undefined, body: "var a = function (){}; return a + b" });
    funcs.push({ full: "function test   (a, b) {var a = function (){}; return a + b}", args: ["a", "b"], name: "test", body: "var a = function (){}; return a + b" });
    funcs.push({ full: "function anonymous (name, surname) {\r\n    console.log(`${this.name} says hi ${name} ${surname}!`);  \r\n  }", args: ["name", "surname"], name: "anonymous", body: "\r\n    console.log(`${this.name} says hi ${name} ${surname}!`);  \r\n  " });
    funcs.map(function (data) {
        it(data.full, function () {
            var result = JSONTools_1.functionParser(data.full);
            chai_1.expect(result.name).to.eql(data.name);
            chai_1.expect(result).to.eql(data);
        });
    });
    it("incorrect function", function () {
        var result = JSONTools_1.functionParser("fun ction() {}");
        chai_1.expect(result).to.eql(undefined);
    });
});
//# sourceMappingURL=functionParser.test.js.map