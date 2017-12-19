// 文字列反転ロジック
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//good
function reverse(str) {
   return str
     .split('')
     .reverse()
     .join('');
}
//better
function reverse(str) {
  let reversed = '';

  for (let character of str) {
     reversed = character + reversed;
   }

  return reversed;
}

//best
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
