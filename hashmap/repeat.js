const Hashmap = require('./hashmap');
const LinkList = require('../linked_list/linked-list');

module.exports = (str) =>{
  let arr = str.split(' ');
  let map = new Hashmap(arr.length);
  const helper = (word) =>{
    let hash = map._generateHash(word);
    if(!map._buckets[hash]){
      map._buckets[hash] = new LinkList(word);
    }
    else return word;
  };
  let repeated = null;
  for(let i = 0; i<arr.length; i++){
    let found = helper(arr[i]);
    if(found){
      repeated = found;
      break;
    }
  }
  return repeated;
};