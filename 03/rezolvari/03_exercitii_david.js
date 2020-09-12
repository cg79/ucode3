
//Aceste exercitii se pot rezolva si mai incolo daca acum e mai greut. se pot face si acum. de aia o sa dau niste hinturi.

//TAKE A LOOOK: https://scotch.io/tutorials/coding-exercise-build-javascript-array-methods-from-scratch

// 1. WAF which prints to the console element by element from array
//  1.1. use forEach
//  1.2. use map
//  1.3. use reduce

let array = [6,7,3,5,9,1];

function list(x, y) {
    console.log(x);
    return y;
}

let result = array.reduce(list);
console.log(result);

////////////////////////////////////////
let array = [6,7,3,5,9,1];
let result = array.reduce((x,y) => console.log(y), x);
console.log(result);
/////////////////////////////////////////






// 2. WAF which receive an array of numbers and returns the sum of elements from array
// 	2.1 use reduce
// 	2.2 use forEach
// 		hint: you need another valiable named 'sum' for example which is equal 0; for each element from array, increase the sum value and as the last step, return the sum value
// 	2.3 use map

let array = [6,7,3,5,9,1];

function suma(x, y) {
    return x + y;
}

let result = array.reduce(suma);
console.log(result);

/////////////////////////////////////////
let array = [6,7,3,5,9,1];
let result = array.reduce((x,y) => x + y);
console.log(result);
/////////////////////////////////////////



// 3. WAF WR the sum of even (%2 ===0) from an array
// 	3.1. use filter and after that use function declared at 2.1
// 	3.2. use filter and after that use function declared at 2.2
// 	3.3. use filter and after that use function declared at 2.3

let array = [6,7,8,3,5,4,9,1];

let filter = array.filter(j => j % 2 === 0);
let sumOfEven = filter.reduce((x,y) => x+y);
console.log(sumOfEven);




// 4. WAF WR the sum of first n elements from an array
// 	3.1. use slice and after that use function declared at 2.1
// 	3.2. use slice and after that use function declared at 2.2
// 	3.3. use slice and after that use function declared at 2.3

let array = [6,7,3,5,9,1];

function suma(x,y){
    return x + y;
}

let result = array.slice(0,2).reduce(suma);
console.log(result);



////////////////////////////////////////////
let array = [6,7,3,5,9,1];
let result = array.slice(0,2).reduce((x,y) => x + y);
console.log(result);
//////////////////////////////////////////////



// 5. what's the differecnce between slice and splice functions?


// The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
// The splice() method changes the original array and slice() method doesn’t change the original array.
// The splice() method can take n number of arguments and slice() method takes 2 arguments.



// 6. WAF which returns an array of n elements; ex: createEmptyArray(3) ==> [0,0,0]
//    hint: use array.fill function

let array = [6,7,8,3,5,4,9,1];
array.fill(7);
console.log(array);




// 7. WAF with 2 parameters (min, max) WR a random number between min and max
//    hint: do a search on internet how Math.random can be used

let array = [6,7,8,3,5,4,9,1];

function findMinMax(x, y) {
    if (y > x){
        x = y;
    }
    return x;
}

let findMax = array.reduce(findMinMax);
console.log(findMax);




// 8. WAF WR with parameter n which returns an array of random n numbers  between min and max 
//    hint: 
//    use 6. to create the initial array == (1)
//    use forEach(element, index) over (1) and set the element from (1) as the result of 7
//    return (1)

// 9. WAF (write a function) (arr1, arr2) which concatenate 2 arrays
// 	9.1. use concatenate function from array
// 	9.2. use forEach function from array 
// 	     hint: in that function declare use arr1 and forEach element from array2, push the element in arr1 and, in the final step,  return the arr1
// 	9.3. use reduce function;
// 	     hint: the same as 1.2, but use reduce; Note: reduce receive the initial value and this initial value can be arr1;
// 	9.4. use map function;
// 		hint: the same as 1.2 but using map

// 10; use ternary operator over a numeric value n; if n< 18 will return true otherwise false;
//    hint: this should be simple; just use ternary operator documentation

// 11. sort an array of numbers  ascendent
// 12. sort an array of numbers  descendent


// 13.   WAF which receive as input parameter a boolean value; ascendent; if ascendent is true, it will return the array sorted ascendent otherwise descendent
//    hint: use ternary operator to get the necessary function; if ascendent ==> it will be the function name from 11. otherwise from 12;
//    note. you need only the function name and not have to call by using () during the ternary operation (1)
//    use the function (1) to return the corect value

// 14. WAF which receive a string and returns the sum of charcodes of each character from string

// 15. WAF which receive an array of numbers and returns a string representing the fromCharCode ...

// 16. WAF which receive a string and character; the response will be the reversed initial string without character: ex; removeChar('alabalaportocala') => 'lblportocl'
// hint: use split and after that filter and after that reverse and after that join

// 17. having an array of arrays, calculate the sum of all numbers; ex: [[1,2,3],[4],[5,6,7,8],[9,10]] ==> 55

//https://www.freecodecamp.org/news/reduce-f47a7da511a9/ for a little bit later






