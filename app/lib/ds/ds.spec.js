'use strict';


describe('DataStructures: Linked List Test', function () {

   var linkedList;

   beforeEach(function(){
       linkedList = Object.create(DS.LinkedList); //new linked list before each "it"
   })

    it('should result in a linked list 1 long', function () {
        linkedList.push('to');
        expect(linkedList._first.prev).toBe(null);
        expect(linkedList._first.next).toBe(null);
        expect(linkedList._first).toEqual(linkedList._last);
        expect(linkedList._length).toBe(1);
    });

    it('should result in a linked list 3 long', function () {
        linkedList.push('to');
        linkedList.push('be');
        linkedList.push('or');
        expect(linkedList._first.prev).toBe(null);
        expect(linkedList._first.next.item).toBe('be');
        expect(linkedList._first.next.prev.item).toBe('to');
        expect(linkedList._length).toBe(3);
        expect(linkedList.toStringFwd()).toBe('tobeor');
        expect(linkedList.toStringRev()).toBe('orbeto');
    });

    it('should return null when you shift an empty list', function(){
        var item = linkedList.shift();
        expect(item).toBe(null);
    });

    it('should return the first item you shift a populated list', function(){
        linkedList.push('to');
        linkedList.push('be');
        linkedList.push('or');
        var item = linkedList.shift();
        expect(item).toBe('to');
    });

    it('should return null when you pop an empty list', function(){
        var item = linkedList.pop();
        expect(item).toBe(null);
    });

    it('should return the last when you pop a list - one item', function(){
        linkedList.push('to');
        var item = linkedList.pop();
        expect(item).toBe('to');
        expect(linkedList._length).toBe(0);
    });

    it('should return the last when you pop a list - using two items', function(){
        linkedList.push('to');
        linkedList.push('be');
        var item = linkedList.pop();
        expect(item).toBe('be');
        expect(linkedList._length).toBe(1);
        expect(linkedList._first.next).toBe(null);
    });



});
