
module.exports = function() {

	// defaults
	var start = 0,
	    end = arguments[0],
	    step = 1,
	    inclusive = false;

	if (arguments[1]) {
		if(arguments[1] == 'inclusive') {
			inclusive = true;
		} else {
			start = arguments[0];
			end = arguments[1];
		}
	} if (arguments[2]) {
		if (arguments[2] == 'inclusive') {
			inclusive = true;
		} else {
			step = arguments[2];
		}
	} if (arguments[3] && arguments[3] == 'inclusive') {
		inclusive = true;
	}

	var ls = [];

	// descending range
	if (start > end) {
		if (inclusive) --end;
		for (var i = start; i > end; i -= step) {
			ls.push(i);
		}
	}

	// ascending range
	else if (start < end) {
		if (inclusive) ++end;
		for (var i = start; i < end; i += step) {
			ls.push(i);
		}
	}

	return ls;
};
