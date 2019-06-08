"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var JSONTools = /** @class */ (function () {
    function JSONTools() {
    }
    JSONTools.stringify = function (value, space) {
        return JSON.stringify(value, function (key, value) {
            if (typeof value === "function") {
                return value.toString();
            }
            return value;
        }, space);
    };
    JSONTools.parse = function (text) {
        return JSON.parse(text, function (key, value) {
            if (typeof value === "string" && value.indexOf("function") === 0) {
                var parsed = _1.functionParser(value);
                return new (Function.bind.apply(Function, [void 0].concat(parsed.args, [parsed.body])))();
            }
            return value;
        });
    };
    return JSONTools;
}());
exports.JSONTools = JSONTools;
//# sourceMappingURL=JSONTools.js.map