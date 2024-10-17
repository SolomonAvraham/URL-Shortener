"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BASE = ALPHABET.length;
function encode(id) {
    let encoded = "";
    while (id) {
        let remainder = id % BASE;
        id = Math.floor(id / BASE);
        encoded = ALPHABET[remainder] + encoded;
    }
    return encoded;
}
exports.encode = encode;
function decode(encoded) {
    let id = 0;
    for (let char of encoded) {
        id = id * BASE + ALPHABET.indexOf(char);
    }
    return id;
}
exports.decode = decode;
