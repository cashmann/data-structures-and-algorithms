function insertShiftArray(arr, el) {
  if(!Array.isArray(arr)){
    return null;
  }else if(!el){
    return arr;
  }else{
    var newArr = [];
    var insertPoint = Math.ceil(arr.length/2-1);
    for(let i=0; i<arr.length; i++){
      if(i<=insertPoint)
        newArr[i]=arr[i];
      if(i===insertPoint){
        newArr[i+1] = el;
      }else if(i>insertPoint){
        newArr[i+1]= arr[i];
      }
    } return newArr;
  }
}

module.exports = insertShiftArray;