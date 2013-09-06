
var range = require('./range');

console.log('range(4) ', range(4));
console.log('range(4, "inclusive") ', range(4, 'inclusive'));

console.log('range(3, 6) ', range(3, 6));

console.log("range(3, 9, 'inclusive') ", range(3, 9, 'inclusive'));

console.log("range(3, 9, 3)", range(3, 9, 3));

console.log("range(5, 1)", range(5, 1));

console.log("range(5, 1, 'inclusive')", range(5, 1, 'inclusive'));

console.log("range(6, 0, 2, 'inclusive')", range(6, 0, 2, 'inclusive'));
