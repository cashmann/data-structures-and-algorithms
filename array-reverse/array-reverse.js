const arrayReverse = (arr)=>{
  if(Array.isArray(arr)){
    var x = 0;
    var newArr = [];
    for(var i=(arr.length-1); i>=0; i--){
      newArr[x]=arr[i];
      x++;
    }return newArr;
  } else{
    return 'Ah fuck, I can\'t believe you\'ve done this.';
  }
};

module.exports = arrayReverse;