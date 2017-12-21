//指定の文字列がいくつ含まれておるか

//good 
function voewl(str) {
  let count = 0;
  const vowels = ['a','b']; 
  for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}
//better
function voewl(str) {
  const match = str.match(/[aeoiou]/gi);
  return match ? match.length : 0;
}

console.log(voewl('afdfadsf'));