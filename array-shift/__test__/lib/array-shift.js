var insertShiftArray = (arr, el) => {
  if(!Array.isArray(arr)){
    return null;
  }else if(!el){
    return arr;
  }else{
    var newArr = [];
    var insertPoint = Math.ceil(arr.length/2);
    for(let i=0; i<arr.length; i++){
      if(i===insertPoint){
        newArr[i] = el;
      }else if(i>insertPoint){
        newArr[i]= arr[i];
      }else{
        newArr[i] = arr[i+1];
      }
    } return newArr;
  }
};

module.exports = insertShiftArray;