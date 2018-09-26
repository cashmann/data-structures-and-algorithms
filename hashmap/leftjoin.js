'use strict';

const HashMap = require('./hashmap');

module.exports = (ht1, ht2) =>{
  if(!(ht1 instanceof HashMap) || !(ht2 instanceof HashMap)){
    throw new Error('Both inputs must be instances of a hash map');
  }
  let arr = [];
  ht1._buckets.forEach((bucket, i) =>{
    let insert = [];
    if(bucket){
      insert.push(bucket.head.data.key, bucket.head.data.htValue);
      if(ht2._buckets[i]){
        insert.push(ht2._buckets[i].head.data.htValue);
      }else{ insert.push(null);}
      arr.push(insert);
    }
  });
  return arr;
};