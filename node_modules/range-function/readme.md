
Create ranges of integers in javascript.

```javascript
range(4)
> [0,1,2,3]

range(4, 'inclusive')
> [0,1,2,3,4]

// lower and upper bounds
range(3, 6)
> [3,4,5]

range(3, 6, 'inclusive')
> [3,4,5,6]

// step by 3
range(3, 9, 3, 'inclusive')
> [3,6,9]

// descending
range(5, 1)
> [5,4,3,2]

range(5, 1, 'inclusive')
> [5,4,3,2,1]

// descend by a step
range(6, 0, 2, 'inclusive')
> [6,4,2,0]
```
