function fibonacci(num) {
// your code here
	if(num==1) return 0;
	let a = 0, b =1;
	for(let i=3; i<=num; i++) {
		let temp = b;
		b = a+b;
		a = temp;
	}
	return b;
}

module.exports = fibonacci;
