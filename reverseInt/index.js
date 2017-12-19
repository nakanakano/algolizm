function reverseInt(n) {
	 const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

 if (n > 0){   
  	return parseInt(reversed) * Math.sign(n);
  }
}

