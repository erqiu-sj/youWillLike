"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceObjectProperties = exports.nonEmptyJudgment = void 0;
function nonEmptyJudgment(val, cb) {
    if (val)
        return val;
    return cb(val);
}
exports.nonEmptyJudgment = nonEmptyJudgment;
function replaceObjectProperties(contrast, beforeReplacement, afterReplacement) {
    if (beforeReplacement.length !== afterReplacement.length)
        throw new Error("The length of the replacement attribute does not want to wait");
    let r = JSON.stringify(contrast);
    beforeReplacement.forEach((beforeItem, beforeIndex) => (r = r.replace(new RegExp(beforeItem), afterReplacement[beforeIndex])));
    return JSON.parse(r);
}
exports.replaceObjectProperties = replaceObjectProperties;
