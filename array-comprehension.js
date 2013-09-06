
module.exports = function(fn) {

	if (typeof arguments[1] === 'function') {
		var start = 2;
		var guard = arguments[1];
	} else {
		var start = 1;
		var no_guard = true;
	}

	var arguments = Array.prototype.slice.call(arguments);
	var arrays = arguments.slice(start, arguments.length);
	var result = [];
	var args = [];

	var recursion_stack = [{args: [], i: 0}];


	while (recursion_stack.length > 0) {
		var elem = recursion_stack.shift();
		var array = arrays[elem.i];

		for (var j = 0; j < array.length; ++j) {
			var a = elem.args.slice(0);
			a.push(array[j]);
			if (elem.i == (arrays.length - 1)) {
				console.log(a);
				if (no_guard || guard.apply(this, a)) {
					result.push(fn.apply(this, a));
				}
			} else {
				recursion_stack.push({args: a, i: elem.i + 1});
			}
		}

	}

	return result;
};
