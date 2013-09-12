Array comprehension in javascript.

Declaratively construct arrays.

```javascript
comprehend(arrays..., guard_function, function)
```

Where 'arrays...' is any number of arrays to pull data from.

Both 'guard_function' and 'function' take the elements of each of the arrays as parameters.

The boolean returned from the 'guard_function' determines whether or not to use the
data for those elements. 'guard_function' is optional.

The return value of 'function' produces each element in the resulting array.


```javascript

var comprehend = require('array-comprehension');

comprehend([1,2,3,4,5,6], [4,3,2,1], function(x, y) { return x + y; });
> [5, 4, 3, 2, 6, 5, 4, 3, 7, 6, 5, 4, 8, 7, 6, 5, 9, 8, 7, 6, 10, 9, 8, 7]

comprehend(range(1, 10, 'inclusive'), function(x) { return x * 2; });
> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

comprehend(range(1, 10, 'inclusive'), function(x) { return x * 2 >= 12; }, function(x) { return x * 2; });
> [12, 14, 16, 18, 20]

var id = function(x) { return x; };
comprehend(range(50, 100, 'inclusive'), function(x) { return x % 7 == 3; }, id);
> [52, 59, 66, 73, 80, 87, 94]

comprehend(range(5, 15, 'inclusive'), function(x) {
		if (x < 10) return 'BOOM!';
		else return 'BANG!';
	});
> ["BOOM!", "BOOM!", "BOOM!", "BOOM!", "BOOM!", "BANG!", "BANG!", "BANG!", "BANG!", "BANG!", "BANG!"

comprehend([2,5,10], [8,10,11], function(x,y) { return x * y; });
> [16, 20, 22, 40, 50, 55, 80, 100, 110]

comprehend([2,5,10], [8,10,11], [1,2,3], function(x,y,z) { return x * y * z; });
> [16, 32, 48, 20, 40, 60, 22, 44, 66, 40, 80, 120, 50, 100, 150, 55, 110, 165, 80, 160, 240, 100, 200, 300, 110, 220, 330]

var nouns = ['hobo', 'frog', 'pope'];
var adjs = ['lazy', 'grouchy', 'scheming'];
comprehend(adjs, nouns, function(adj, noun) { return adj + " " + noun; });
> ["lazy hobo", "lazy frog", "lazy pope", "grouchy hobo", "grouchy frog", "grouchy pope", "scheming hobo", "scheming frog", "scheming pope"]

```
