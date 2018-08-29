'use strict';

function mbv(str){
  if(!str || typeof str !== 'string'){
    throw new Error('Input error. Please input a non-empty string.');
  }
  let leftRoundCount = 0;
  let rightRoundCount = 0;
  let leftSquareCount = 0;
  let rightSquareCount = 0;
  let leftCurlyCount = 0;
  let rightCurlyCount = 0;
  for(let i=0; i<str.length; i++){
    if(str[i] === '('){
      leftRoundCount++;
    }
    if(str[i] === ')'){
      rightRoundCount++;
    }
    if(str[i]=== '['){
      leftSquareCount++;
    }
    if(str[i]===']'){
      rightSquareCount++;
    }
    if(str[i]==='{'){
      leftCurlyCount++;
    }
    if(str[i]==='}'){
      rightCurlyCount++;
    }
    if(rightCurlyCount>leftCurlyCount || rightRoundCount>leftRoundCount || rightSquareCount>leftSquareCount){
      return false;
    }
  }
  if(rightCurlyCount===leftCurlyCount && rightRoundCount===leftRoundCount && rightSquareCount===leftSquareCount){
    return true;
  } else return false;

}

module.exports = mbv;