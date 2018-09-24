'use strict';

module.exports = class HashMap {
  constructor(capacity = 20) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key) {
    if (typeof key !== 'string') {
      throw new TypeError('HASHMAP ERROR: key should be a string');
    }

    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    //  x % y => some number between 0 and (y-1)
    return hash; // For capacity of 20, we get some number between 0-19
  }
};