
exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let mn = array[0];
        for (let i of array) {
            if (i < mn) {
                mn = i;
            }
        }
        return mn;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let sm = 0;
        for (let i of array) {
            sm += i;
        }
        return (sm / array.length).toFixed(2);
    }
    return 0;
}

exports.max = function max(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let mx = 0;
        for (let i of array) {
            if (i > mx) {
                mx = i;
            }
        }
        return mx;
    }
    return 0;
}
