// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myFilter(arr, callback) {

	var arrFil = [];
	for(var i=0; i < arr.length; i++) {
		if (callback(arr[i])) {
			arrFil.push(arr[i]);
		}
	}
	return arrFil;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
