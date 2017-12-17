//good
function palindrome(str) {
	const rev = str.split('').reverse().join('');
	return str === rev ;
}

//better 
function palindrome(str){
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}