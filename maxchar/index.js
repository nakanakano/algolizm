// 文字列の中ので最も多く存在するもの
// 例: maxChar("aaaaaaaaaaffffggggg") === "a"


function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
 //for ofは列挙可能なもの
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  //for inは連想配列オブジェクト
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}