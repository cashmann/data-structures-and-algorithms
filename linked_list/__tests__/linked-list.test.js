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
  });
});