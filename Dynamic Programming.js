Majority of the Dynamic Programming problems can be categorized into two types:

1. Optimization problems.
2. Combinatorial problems.

The optimization problems expect you to select a feasible solution, so that the value of the required function 
is minimized or maximized. 

Combinatorial problems expect you to figure out the number of ways to do something, or the probability of some event happening.

Every Dynamic Programming problem has a schema to be followed:

1)Show that the problem can be broken down into optimal sub-problems.
2)Recursively define the value of the solution by expressing it in terms of optimal solutions for smaller sub-problems.
3)Compute the value of the optimal solution in bottom-up fashion.
4)Construct an optimal solution from the computed information.



Example 
Given a set of coins, and an amount of change we need to return, we are asked to calculate the number of ways we can return
the correct change, given our set of coins.

Note: We have an unlimited amount of each coin type at our disposal.

function waysToReturnMemoize(amount, denominations) {
    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    // there is 1 way to renturn 0 cents
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        // we can only start returning change with coins in our denominations
        var coin = denominations[j];
        
        // we start bottom up, each time reducing change amout with curr coin.
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            // ways to create change is equivalent to reducing the problem to a known problem
            // and gaining all the ways to solve for smaller problems
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}

var denominations = [1, 2, 3];
var amount = 19;

alert(waysToReturnMemoize(amount,denominations));

Example 2
A game for one player is played on a board consisting of N consecutive squares, numbered from 0 to N − 1.
There is a number written on each square. A non-empty array A of N integers contains the numbers written on the squares. Moreover, 
some squares can be marked during the game.
At the beginning of the game, there is a pebble on square number 0 and this is the only square on the board which is marked.
The goal of the game is to move the pebble to square number N − 1.
During each turn we throw a six-sided die, with numbers from 1 to 6 on its faces, and consider the number K,
which shows on the upper face after the die comes to rest. Then we move the pebble standing on square number I to square number I + K,
providing that square number I + K exists. If square number I + K does not exist, we throw the die again until we obtain a valid move. 
Finally, we mark square number I + K.

After the game finishes (when the pebble is standing on square number N − 1), we calculate the result. 
The result of the game is the sum of the numbers written on all marked squares.
For example, given the following array:
    A[0] = 1
    A[1] = -2
    A[2] = 0
    A[3] = 9
    A[4] = -1
    A[5] = -2
one possible game could be as follows:

the pebble is on square number 0, which is marked;
we throw 3; the pebble moves from square number 0 to square number 3; we mark square number 3;
we throw 5; the pebble does not move, since there is no square number 8 on the board;
we throw 2; the pebble moves to square number 5; we mark this square and the game ends.
The marked squares are 0, 3 and 5, so the result of the game is 1 + 9 + (−2) = 8. This is 
the maximal possible result that can be achieved on this board.

Write a function:

function solution(A);
that, given a non-empty array A of N integers, returns the maximal result that can be achieved on the board represented by array A.
For example, given the array

    A[0] = 1
    A[1] = -2
    A[2] = 0
    A[3] = 9
    A[4] = -1
    A[5] = -2
the function should return 8, as explained above.

Assume that:
N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var i = 0;
    var j = 0;
    var result = [];
    
    result[0] = A[0];
    for(i=1; i<A.length; i++) {
        result[i] = -Infinity;
    }
    
    for(i=1; i<A.length; i++) {
        for(j=Math.max(0, i-6); j<i; j++) {
            result[i] = Math.max(result[i], result[j] + A[i]);
        }
    }
    
    return result[result.length - 1];
}
