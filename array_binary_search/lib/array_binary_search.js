'use strict';

  module.exports = (arr, key) =>{
    if(Array.isArray(arr)){
      if(key){
        if(arr[arr.length-1]===key){
          return arr.length-1;
        }
        let searchArr = arr;
        let x = 0;
        while(searchArr.length > 1){
          console.log(searchArr.length);
          let mid = Math.ceil(searchArr.length/2);
          console.log('before', { mid, searchArr })
          if(searchArr[mid-1]>key){
            console.log(`${searchArr[mid-1]} is greater than ${key}`);
            console.log(mid);
            let newSearchArr = [];
            for(let i=0; i<mid; i++){
              newSearchArr[i]= searchArr[i];
              
            }
            searchArr = newSearchArr;
            if(!(x >= 0)){
              x-=mid;
            } else{
              x=0;
            }
          
          }
          else if(searchArr[mid-1]<key){
            console.log(mid);
            console.log(`${searchArr[mid-1]} is less than ${key}`);
            let newSearchArr = [];
            for(let i=0; i<mid; i++){
              newSearchArr[i]= searchArr[mid+i];
              
            }
            searchArr = newSearchArr;
            x+=mid;
          }
          else{
            console.log(`${searchArr[mid-1]} is equal to ${key}`)
            x+=mid;
            if(x<=0){
              console.log('x less or equal 0');
              return 0;
            } else{
              console.log('x greater than 0');
              console.log(x);
              return x-1;
            }
  
          }
          console.log('after', { mid, searchArr })
        } 
        console.log(searchArr);
        if(searchArr[0] === key){
          return 0;
        } 
        else{
        return -1;
        }
      } else{
        throw new Error('search key not defined');
      }
    } else{
      return null;
      //throw new Error('Cannot accept non-arrays as the first argument.');
    }
  }