// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
	var resultRed;
	var pos;
	if(!initialValue) {
		resultRed = arr[0];
		pos = 1;
	}
	else {
		resultRed = initialValue;
		pos = 0;
	}
	for(i = pos; pos < arr.length; pos++) {
		resultRed = callback(resultRed, arr[pos], pos, arr);			 
	}
	return resultRed;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
