import { functionParser } from "./";
export class JSONTools {
  static stringify(value: any, space?: string | number) {
    return JSON.stringify(
      value,
      (key, value) => {
        if (typeof value === "function") {
          return value.toString();
        }
        return value;
      },
      space
    );
  }
  static parse(text: string) {
    return JSON.parse(text, (key, value) => {
      if (typeof value === "string" && value.indexOf("function") === 0) {
        var parsed = functionParser(value);
        return new Function(...parsed.args, parsed.body);
      }
      return value;
    });
  }
}