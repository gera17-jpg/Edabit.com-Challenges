/*6.Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers. */

function nextEdge(side1, side2){
	return((side1 +side2)-1);
}

/*7.Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0. */

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
  }

/*8.Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order. */

const REGEXP = /(red|blue) flag/g