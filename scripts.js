
document.getElementById("goButton").addEventListener("click", makeTree);

function makeTree () {  //function runs when button is clicked
  var height = document.getElementById('height').value;  //height of the tree, should be integer
  var char = document.getElementById('character').value;  //character the tree is comprised of
  var output = "";  //holds the long string of characters
  var spaces = height;  //keeps track of how many spaces required before the first character
  var spacer = "";  //a string to hold the spaces


  //determine if the value for "height" is even a number

  if (Number.isInteger(parseInt(height))) {  //if it is, run the function
   
  //loops for the first line of tree:
    for (i = 0; i < height; i++) {  //runs as many times as user has specified "height" to be
      spacer += " ";
    }

    console.log(spacer + " " + char);  //places the first character of the tree, centered

  //loops for the rest of the tree:

    for (i = 0; i < height; i++) {  //same as above
      spacer = "";

      for (j = 0; j < spaces; j++) { //same as aboce
        spacer += " ";
      }

      output += char;  //adds a single character to the output string

      console.log(spacer + output + char + output); //final output being logged to each line

      spaces = spaces - 1;  //spaces counter goes down 1, as each line needs less spaces
    }
  } else {  //if it is not, throws it out
    console.log("Enter a number!");
  }
}


//if height is 10
//need
// 10 spaces, 1 character, 10 spaces
//9 spaces 2 characters, 9 spaces
//8 spaces, 3 characters, 8 spaces
//etc

