const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


var test1 = [[1,2,3], [4], [0,8], [], [1,5,6], [6], [7], [], [7]];

assert(JSON.stringify(depthFirstSearch(test1,0,7)) == JSON.stringify([0, 1, 4, 5, 6, 7]));
assert(JSON.stringify(depthFirstSearch(test1,3,7)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(test1,0,10)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(test1,2,7)) == JSON.stringify([2, 0, 1, 4, 5, 6, 7]));

//bonus testing
assert(JSON.stringify(BFS(test1,0,7)) == JSON.stringify([0, 2, 8, 7]));
assert(JSON.stringify(BFS(test1,0,3)) == JSON.stringify([0, 3]));
assert(JSON.stringify(BFS(test1,4,6)) == JSON.stringify([4, 6]));
assert(JSON.stringify(BFS(test1,3, 7)) == JSON.stringify([]));

var test2 = [[1,2], [0,3], [0,3,4], [1,2 ,5], [2], [3]];

assert(JSON.stringify(depthFirstSearch(test2,0,4)) == JSON.stringify([0, 1, 3, 2, 4]));
assert(JSON.stringify(depthFirstSearch(test2,1,4)) == JSON.stringify([1, 0, 2, 4]));
assert(JSON.stringify(depthFirstSearch(test2,0,6)) == JSON.stringify([]));

//bonus testing
assert(JSON.stringify(depthFirstSearch(test2,0,4)) == JSON.stringify([0, 1, 3]));
assert(JSON.stringify(depthFirstSearch(test2,4,3)) == JSON.stringify([4,2,3]));
assert(JSON.stringify(depthFirstSearch(test2,4,1)) == JSON.stringify([4,2,0,1]));

var test3 = [];

assert(JSON.stringify(depthFirstSearch(test3,0,2)) == JSON.stringify([]));

//bonus testing
assert(JSON.stringify(BFS(test3, 0, 2)) == JSON.stringify([]));
