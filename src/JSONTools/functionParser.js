"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function functionParser(str) {
    var regex = /function\s*(\S*)?\s*\(\s*([^)]+?)?\s*\)[^{]*{([^}]?.*)?}/s;
    var col = regex.exec(str || "");
    if (col != null) {
        var result = new ParseResult();
        result.full = col[0];
        result.name = col[1];
        result.args = col[2] == null ? [] : col[2].split(/\s*,\s*/);
        result.body = col[3];
        return result;
    }
    return undefined;
}
exports.functionParser = functionParser;
var ParseResult = /** @class */ (function () {
    function ParseResult() {
    }
    return ParseResult;
}());
//# sourceMappingURL=functionParser.js.map