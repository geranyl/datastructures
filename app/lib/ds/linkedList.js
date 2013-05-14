var DS = DS || {};

DS.LinkedList = {

    _Node: {
        item: null,
        next: null,
        prev: null
    },

    _first: null, //first node
    _last: null, //last node
    _length: 0, //number of items

    unshift: function (item) {  //add one to start

    },

    shift: function () {   //remove one from start
        if(this._length){
            var item = this._first.item;
            this._first = this._first.next;
            this._first.prev = null;
            if(this.isEmpty()) this._last = null;
            this._length--;
            return item;
        }
        return null;

    },

    push: function (item) { //add one to end
        var oldlast = this._last;
        this._last = Object.create(this._Node);
        this._last.item = item;
        this._last.next = null;

        if (this.isEmpty()) {
            this._first = this._last
        } else {
            oldlast.next = this._last;
            this._last.prev = oldlast;
        }

        this._length++;

    },

    pop: function () { //remove one from end
        if(this._length){
            var oldlast = this._last;
            this._last = oldlast.prev;
            if(!this._last){
               this._first = this._last;
            } else{
                this._last.next = null;
            }
            this._length--;
            return oldlast.item;
        }
        return null;
    },

    isEmpty: function (){
        return this._first === null;
    },

    toStringFwd: function(){
       var str = '';
       var cur = this._first;
       while(cur){
           str += cur.item.toString();
           cur = cur.next;
       }
       return str;
    },

    toStringRev: function(){
        var str = '';
        var cur = this._last;
        while(cur){
            str += cur.item.toString();
            cur = cur.prev;
        }
        return str;
    }

};