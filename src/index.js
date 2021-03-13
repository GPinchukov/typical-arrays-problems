
exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let min = array[0];
        for (let i of array) {
            if (i < min) {
                min = i;
            }
        }
        return min;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let sum = 0;
        for (let i of array) {
            sum += i;
        }
        return (sum / array.length).toFixed(2);
    }
    return 0;
}

exports.max = function max(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let max = 0;
        for (let i of array) {
            if (i > max) {
                max = i;
            }
        }
        return max;
    }
    return 0;
}
