export function functionParser(str?: string): ParseResult{
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

class ParseResult{
    full?: string;
    name?: string;
    args: string[];
    body: string;
}