// es6 style on
'use strict';

// es 6 기능 : 객체 분해

var sentences = [{ subject: 'Javascript', verb: 'is', object: 'great' }, { subject: 'Elephants', verb: 'are', object: 'large' }];

// es6 기능: 객체 분해

function say(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    // es6 기능: 탬플릿 문자열
    // 아래 사용한 것은 따옴표가 아니라 백틱(`), 을 사용

    console.log(subject + ' ' + verb + ' ' + object);
}

//es6 기능 for..of

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        say(s);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}