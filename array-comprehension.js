
module.exports = function() {
	
	arguments = Array.prototype.slice.call(arguments);
	var len = arguments.length;

	if (typeof arguments[len - 2] === 'function') {
		var fn = arguments[len - 1];
		var guard = arguments[len - 2];
		var arrays = arguments.slice(0, len - 2)
	} else {
		var fn = arguments[len - 1];
		var arrays = arguments.slice(0, len - 1)
		var no_guard = true;
	}

	var recursion_stack = [{args: [], i: 0}];
	var result = [];

	while (recursion_stack.length > 0) {
		var elem = recursion_stack.shift();
		var array = arrays[elem.i];

		for (var j = 0; j < array.length; ++j) {
			var a = elem.args.slice(0);
			a.push(array[j]);
			if (elem.i == (arrays.length - 1)) {
				if (no_guard || guard.apply(this, a)) {
					result.push(fn.apply(this, a));
				}
			} else {
				recursion_stack.push({args: a, i: elem.i + 1});
			}
		} //for

	} //while

	return result;
};
