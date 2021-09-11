"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryVariable = void 0;
/**
 * @description get query params
 * @param variable
 * @returns
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}
exports.getQueryVariable = getQueryVariable;
