/*1. This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

function hello() {

}
All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens. */

function hello() {
	return("hello edabit.com");
}

/*2.Write a function that converts hours into seconds. */

function howManySeconds(hours) {
    return(hours * 3600);
}

/*3. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/

function remainder(x, y) {
	return(x % y);
}

/*4. Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/

function addition = (num) => num + 1;

/*5. Create a function that takes an array containing only numbers and return the first element. */

function getFirstValue(arr){
	return(arr[0]);
} 

/*Create a function that takes voltage and current and returns the calculated power.*/

function circuitPower(voltage, current) {
	return(voltage*current);
}