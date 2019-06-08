import { expect } from 'chai';
import { JSONTools } from '../src/JSONTools';

describe("JSONTool tests", () => {
    before(function () {
        //this.skip();
    });

    it("complex", () =>{
        let person = {
            name: 'Susan',
            age: 24,
            sayHi: function(firstName: string, middleName: string) {
                return `${this.name} says hi ${firstName} ${middleName}!`;
            },
            methods: {
                test: (a: number, b: number, c: number) =>{
                    var my = function (u: number) {
                        return u + b;
                    };
                    return my(a) + b + c;
                }
            }
        };

        var serialized = JSONTools.stringify(person);
        var parsed = JSONTools.parse(serialized);

        serialized = JSONTools.stringify(parsed);
        parsed = JSONTools.parse(serialized);

        serialized = JSONTools.stringify(parsed);
        parsed = JSONTools.parse(serialized);

        expect(parsed.sayHi('Tom', 'Петров'), "Message1").eq("Susan says hi Tom Петров!");
        expect(parsed.methods.test(1, 2, 3), "Message2").eq(8);
    });
});