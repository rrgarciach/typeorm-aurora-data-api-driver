"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleArrayToString = exports.dateToTimeString = exports.dateToDateString = exports.dateToDateTimeString = void 0;
var pad = function (val, num) {
    if (num === void 0) { num = 2; }
    return '0'.repeat(num - (val.toString()).length) + val;
};
exports.dateToDateTimeString = function (date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Convert to human month
    var day = date.getUTCDate();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ms = date.getUTCMilliseconds();
    var fraction = ms <= 0 ? '' : "." + pad(ms, 3);
    return year + "-" + pad(month) + "-" + pad(day) + " " + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + fraction;
};
exports.dateToDateString = function (date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Convert to human month
    var day = date.getUTCDate();
    return year + "-" + pad(month) + "-" + pad(day);
};
exports.dateToTimeString = function (date) {
    if (typeof date === 'string') {
        return date;
    }
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ms = date.getUTCMilliseconds();
    var fraction = ms <= 0 ? '' : "." + pad(ms, 3);
    return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + fraction;
};
exports.simpleArrayToString = function (value) {
    if (Array.isArray(value)) {
        return value
            .map(function (i) { return String(i); })
            .join(',');
    }
    return value;
};
//# sourceMappingURL=transform.utils.js.map