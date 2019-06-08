"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var JSONTools_1 = require("../src/JSONTools");
describe("JSONTool tests", function () {
    before(function () {
        //this.skip();
    });
    it("complex", function () {
        var person = {
            name: 'Susan',
            age: 24,
            sayHi: function (firstName, middleName) {
                return this.name + " says hi " + firstName + " " + middleName + "!";
            },
            methods: {
                test: function (a, b, c) {
                    var my = function (u) {
                        return u + b;
                    };
                    return my(a) + b + c;
                }
            }
        };
        console.log(person.sayHi.toString());
        var serialized = JSONTools_1.JSONTools.stringify(person);
        var parsed = JSONTools_1.JSONTools.parse(serialized);
        console.log(parsed.sayHi.toString());
        serialized = JSONTools_1.JSONTools.stringify(parsed);
        parsed = JSONTools_1.JSONTools.parse(serialized);
        console.log(parsed.sayHi.toString());
        serialized = JSONTools_1.JSONTools.stringify(parsed);
        parsed = JSONTools_1.JSONTools.parse(serialized);
        console.log(parsed.sayHi.toString());
        chai_1.expect(parsed.sayHi('Tom', 'Петров'), "Message1").eq("Susan says hi Tom Петров!");
        chai_1.expect(parsed.methods.test(1, 2, 3), "Message2").eq(8);
    });
});
//# sourceMappingURL=JSONTools.test.js.map