'use strict';

const linkedList = require('../linked-list');

describe('linkedList', ()=>{
  describe('LinkedList', ()=>{
    it('can create an empty list', ()=>{
      var list = new linkedList();
      expect(list.head).toBe(null);
    });
    it('can insert a new value to the beginning of the list', ()=>{
      var list = new linkedList();
      list.insert('hi');
      expect(list.head).toEqual({'data': 'hi', 'next': null});
      list.insert({'data': 'hi', 'next': null});
      expect(list.head).toEqual({'data': {'data': 'hi', 'next': null}, 'next': {'data': 'hi', 'next': null}});
      expect(list.itemCount).toBe(2);
    });
    it('can check if a value is in the list', ()=>{
      var list = new linkedList();
      list.insert('hi');
      expect(list.includes('hi')).toBe(true);
      list.insert('bye');
      expect(list.includes('hi')).toBe(true);
      expect(list.includes('bye')).toBe(true);
      expect(list.includes(1)).toBe(false);
    });
    it('can insert a new value at the end of a list', ()=>{
      var list = new linkedList();
      list.insert('hi');
      list.insert('bye');
      list.insert('hola');
      list.append('pfft');
      expect(list.itemCount).toBe(4);
      expect(list.head.next.next.next).toEqual({'data': 'pfft', 'next': null});
    });
    it('can insert a new value after a given value', ()=>{
      var list = new linkedList();
      list.insert('hi');
      list.insert('bye');
      list.insert('hola');
      list.append('pfft');
      list.insertAfter('bye', 1);
      expect(list.itemCount).toBe(5);
      expect(list.head.next.next.data).not.toBe('hi');
      expect(list.head.next.next.data).toBe(1);
      expect(list.head.next.next.next.data).toBe('hi');
    });
    it('can insert a new value before a given value', ()=>{
      var list = new linkedList();
      list.insert('hi');
      list.insert('bye');
      list.insert('hola');
      list.append('pfft');
      list.insertBefore('hola', 5);
      expect(list.itemCount).toBe(5);
      expect(list.head.data).toBe(5);
      expect(list.head.next.data).toBe('hola');
      list.insertBefore('hola', 6);
      expect(list.head.next.data).toBe(6);
    });
  });
});