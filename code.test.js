const fs = require('fs');
var test = require('unit.js');

eval(fs.readFileSync('code.js')+'');

        var test1 = [[1,2,3], [], [0,8], [], [1,5,6], [6], [7], [], [7]];

        var test1result1 = [0, 1, 4, 5, 6, 7];    //search starting at 0 and finding node 7 
        var test1result2 = [];                    //search starting at 3 and finding 7 (should return empty)
        var test1result3 = [];                    //search starting at 0 and finding 10 (doesn't exist so return empty)
        var test1result4 = [2, 0, 1, 4, 5, 6, 7]; //search starting at 2 and finding 7, should go to 0 first since tie-breaker is lesser node unvisited

        test.value(depthFirstSearch(test1, 0, 7)) == test1result1;
        test.value(depthFirstSearch(test1, 3, 7)) == test1result2;
        test.value(depthFirstSearch(test1, 0, 10)) == test1result3;
        test.value(depthFirstSearch(test1, 2, 7)) == test1result4;

        var test2 = [[1,2], [0,3], [0,3,4], [1,2 ,5], [2], [3]];

        var test2result1 = [0, 1, 3, 2, 4];        //search starting at 0 and finding 4
        var test2result2 = [1, 0, 2, 4];                  //search starting at 1 and finding 4 (cycle)
        var test2result3 = [];                  //search starting at 0 and finding 6 (doesnt't exist)

        test.value(depthFirstSearch(test2, 0, 4)) == test2result1;
        test.value(depthFirstSearch(test2, 1, 4)) == test2result2;
        test.value(depthFirstSearch(test2, 0, 6)) == test2result3;

        var test3 = [];

        var test3result1 = [];            //search for anything in empty graph

        test.value(depthFirstSearch(test3, 0, 2)) == test3result1;
        
