(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['thomas', 'sharon', 'katye', 'james'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
// names.forEach(function (name) {
//     console.log(name);
// });

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i += 1){
        console.log(names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

names.forEach(function(name){
    console.log(name);
});
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var numArr = [1, 2, 3, '4', 5];

    function firstItem(arr){
        return (arr[0]);
        // return arr[0]; //both yield the same results
    }
    console.log(firstItem(numArr));

    function secondItem(arr) {
    return (arr[1]);

    }
    console.log(secondItem(numArr));

    // var numArr = [1, 2, 3, 4, 5];
    function last(arr){

        // return arr.length - 1; //gives back a number, this is just math. Essentially, we are taking the entire length as a number and subtracting 1 to give that number minus 1.  If the array.length was 8 elements we would get back 7...
        return (arr[arr.length -1]); //what's the difference between arr.length - 1 vs arr[arr.length - 1]?
    }

    // console.log(firstItem(numArr));
    // console.log(secondItem(numArr));
    // console.log(last(numArr));



})();
