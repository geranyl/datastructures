var ds = ds || {};

ds.linkedList = function () {

    function node() {
        return {item: null, next: null, prev: null};
    }

    function isEmpty() {
        return _first === null;
    }

    var _first = null,
        _last = null,
        _length = 0;


    console.log('this is? ', this)


    var innerLL = {};

    innerLL.unshift = function (item) {  //add one to start

    }

    innerLL.shift = function () {   //remove one from start
        if (_length) {
            var item = _first.item;
            _first = _first.next;
            _first.prev = null;
            if (isEmpty()) _last = null;
            _length--;
            return item;
        }
        return null;

    }

    innerLL.push = function (item) { //add one to end

        var oldlast = _last;
        _last = new node();
        _last.item = item;
        _last.next = null;

        if (isEmpty()) {
            _first = _last
        } else {
            oldlast.next = _last;
            _last.prev = oldlast;
        }

        _length++;

    }

    innerLL.pop = function () { //remove one from end
        if (_length) {
            var oldlast = _last;
            _last = oldlast.prev;
            if (!_last) {
                _first = _last;
            } else {
                _last.next = null;
            }
            _length--;
            return oldlast.item;
        }
        return null;
    }

    innerLL.toStringFwd = function () {
        var str = '';
        var cur = _first;
        while (cur) {
            str += cur.item.toString();
            cur = cur.next;
        }
        return str;
    }

    innerLL.toStringRev = function () {
        var str = '';
        var cur = _last;
        while (cur) {
            str += cur.item.toString();
            cur = cur.prev;
        }
        return str;
    }


    addProperty(innerLL, 'length', function(){
        return _length;
    }, null);

    addProperty(innerLL, 'first', function(){
        return _first;
    }, null);

    addProperty(innerLL, 'last', function(){
        return _last;
    }, null);


    return innerLL;

};