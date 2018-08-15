const arrayReverse = (arr)=>{
  if(Array.isArray(arr)){
    /*
    // Changed our minds!
    if (arr.length === 0) {
      return arr;
    }
    */

    var x = 0;
    var newArr = [];
    for(var i=(arr.length-1); i>=0; i--){
      newArr[x]=arr[i];
      x++;
    }return newArr;
  } else{
    return 'oops';
  }
};

module.exports = arrayReverse;

