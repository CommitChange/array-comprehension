
var comprehend = require('./array-comprehension');
var range = require('range-function');

console.log(comprehend([1,2,3,4,5,6], [4,3,2,1], function(x, y) { return x + y; }));

var xs = comprehend(range(1, 10, 'inclusive'), function(x) { return x * 2; });

console.log(xs);

xs = comprehend(range(1, 10, 'inclusive'), function(x) { return x * 2 >= 12; }, function(x) { return x * 2; });

console.log(xs);

var id = function(x) { return x; };

xs = comprehend(range(50, 100, 'inclusive'), function(x) { return x % 7 == 3; }, id);

console.log(xs);

xs = comprehend(range(5, 15, 'inclusive'), function(x) {
		if (x < 10) return 'BOOM!';
		else return 'BANG!';
	});

console.log(xs);

xs = comprehend([2,5,10], [8,10,11], function(x,y) { return x * y; });

console.log(xs);

xs = comprehend([2,5,10], [8,10,11], [1,2,3], function(x,y,z) { return x * y * z; });

console.log(xs);

var nouns = ['hobo', 'frog', 'pope'];
var adjs = ['lazy', 'grouchy', 'scheming'];

xs = comprehend(adjs, nouns, function(adj, noun) { return adj + " " + noun; });

console.log(xs);
