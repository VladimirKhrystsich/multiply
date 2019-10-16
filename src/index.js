module.exports = function multiply(first, second) {
    return String(BigInt(first) * BigInt(second)).slice(0, -1);
}
