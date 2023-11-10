'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var phoneFns = require('phone-fns');
var numeral = require('numeral');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var numeral__default = /*#__PURE__*/_interopDefaultLegacy(numeral);

const NUMBER_FORMAT_PATTERN = "1,1";
const VALID_ZIP_CODE_PATTERN = /^\d{5}(?:[-\s]\d{4})?$/;
const DATE_FORMAT_PATTERN = "MMM d, yyyy";
const PHONE_FORMAT_PATTERN = "+N (NNN) NNN-NNNN";
const PHONE_MATCH_PATTERN = /^$|^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const STANDARD_CURRENCY_FORMAT_PATTERN = "$1,1";
const EXTENDED_CURRENCY_FORMAT_PATTERN = "$1,1.11";
const formatCurrency = (value, pattern) => {
  if (!value) {
    return value;
  }
  return numeral__default["default"](value).format(pattern || STANDARD_CURRENCY_FORMAT_PATTERN);
};
const formatNumber = (value, pattern) => {
  if (!value) {
    return value;
  }
  return numeral__default["default"](value).format(pattern || NUMBER_FORMAT_PATTERN);
};
const formatPhone = (value, pattern) => {
  if (!value) {
    return value;
  }
  return phoneFns.format(pattern || PHONE_FORMAT_PATTERN, value.toString());
};
const getTenth = (value, pattern) => {
  if (!value) {
    return value;
  }
  const str = String(value);
  return str.substring(str.length - 1);
};

exports.DATE_FORMAT_PATTERN = DATE_FORMAT_PATTERN;
exports.EXTENDED_CURRENCY_FORMAT_PATTERN = EXTENDED_CURRENCY_FORMAT_PATTERN;
exports.NUMBER_FORMAT_PATTERN = NUMBER_FORMAT_PATTERN;
exports.PHONE_FORMAT_PATTERN = PHONE_FORMAT_PATTERN;
exports.PHONE_MATCH_PATTERN = PHONE_MATCH_PATTERN;
exports.STANDARD_CURRENCY_FORMAT_PATTERN = STANDARD_CURRENCY_FORMAT_PATTERN;
exports.VALID_ZIP_CODE_PATTERN = VALID_ZIP_CODE_PATTERN;
exports.formatCurrency = formatCurrency;
exports.formatNumber = formatNumber;
exports.formatPhone = formatPhone;
exports.getTenth = getTenth;
//# sourceMappingURL=utils.js.map
