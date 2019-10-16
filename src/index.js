module.exports = function multiply(first, second) {
    var a = BigInt(first);
	var b = BigInt(second);
return String(a * b).slice(0, -1);
}
