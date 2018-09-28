'use strict';
const LinkedList = require('../linked_list/linked-list');

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

    return hash;
  }
  set(key, htValue) {
    const hash = this._generateHash(key);

    if (!this._buckets[hash]) {
      this._buckets[hash] = new LinkedList();
      this._buckets[hash].insert({ key, htValue });
      console.log(this._buckets);
      return this;
    }

    this._buckets[hash].append(new LinkedList({ key, htValue }));
    return this;
  }
};