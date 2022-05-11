'use strict'
function BinarioADecimal(num) {
  // tu codigo aca
  num = num.toString();
  let decimal = +0;
  let cantbit = +1;
  for(let i = 0; i < num.length; i++) {
      let nNum = +(num[num.length - i - 1]);
      if(nNum === 1) {
          decimal += cantbit;
      }
      cantbit *= 2;
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  var res = num, bin = [], res2 = 0; 
  var cantbit = Math.floor(Math.log2(num)+1);
  for(let i=0;i<cantbit;i++){
    res2 = res%2;
    res = res/2;
    if(res2 === 0){
      bin.unshift(Math.floor(res2));
    }else{
      bin.unshift(Math.floor(res2));
    }
  }
  return bin.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}