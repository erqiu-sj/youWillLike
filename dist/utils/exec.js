"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.microTask = exports.macroTask = exports.sleep = void 0;
/**
 * @description sleep wait
 * @param ms
 * @returns { void }
 */
function sleep(ms) {
    var start = new Date().getTime();
    while (true)
        if (new Date().getTime() - start > ms)
            break;
}
exports.sleep = sleep;
/**
 * @description 将回调推入宏任务
 * @param cb callback
 * @param ms time
 */
function macroTask(cb, ms = 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
        yield cb();
    }), ms);
}
exports.macroTask = macroTask;
/**
 * @description 将回调推入宏任务
 * @param cb callback
 */
function microTask(cb) {
    return new Promise(resolve => {
        resolve(cb());
    });
}
exports.microTask = microTask;
