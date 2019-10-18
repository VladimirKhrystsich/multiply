module.exports = function multiply(first, second) {
    var x = first.split('').reverse();
    var y = second.split('').reverse();
    var count = [0];
    for (let i = 0; i < x.length; i++) {
        for (let k = 0; k < y.length; k++) {
            var num = parseInt(x[i]) * parseInt(y[k]);
            var pos = i + k;
            if (count[pos] == undefined) {
                count[pos] = num;
            } else {
                count[pos] += num;
            }
        }
    }
    count.push(0);
    for (let i = 0; i < count.length - 1; i++) {
        if (count[i].toString().length == 2) {
            count[i + 1] += Number(count[i].toString()[0]);
            count[i] = Number(count[i].toString()[1]);
        } else if (count[i].toString().length == 3) {
            count[i + 1] += Number(count[i].toString().slice(0, 2));
            count[i] = Number(count[i].toString()[2]);
        } else if (count[i].toString().length == 4) {
            count[i + 1] += Number(count[i].toString().slice(0, 3));
            count[i] = Number(count[i].toString()[3]);
        }
    }
    if (count[count.length - 1] == 0) {
        count.pop()
    }
    return count.reverse().join('');
}
