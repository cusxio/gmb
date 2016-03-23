'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = template;

var _babel = require('./babel');

var _babel2 = _interopRequireDefault(_babel);

var _eslint = require('./eslint');

var _eslint2 = _interopRequireDefault(_eslint);

var _git = require('./git');

var _git2 = _interopRequireDefault(_git);

var _license = require('./license');

var _license2 = _interopRequireDefault(_license);

var _package = require('./package');

var _package2 = _interopRequireDefault(_package);

var _readme = require('./readme');

var _readme2 = _interopRequireDefault(_readme);

var _travis = require('./travis');

var _travis2 = _interopRequireDefault(_travis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template(opt) {
    var obj = {
        b: _babel2.default,
        e: _eslint2.default,
        g: _git2.default,
        l: _license2.default,
        p: _package2.default,
        r: _readme2.default,
        t: _travis2.default
    };
    if (typeof opt === 'string') {
        var fn = obj[opt];
        return fn();
    } else if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
        var _fn = obj[opt.key];
        return _fn(opt.custom);
    }
}