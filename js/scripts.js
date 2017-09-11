var sentence = prompt("Enter a sentence");

console.log(sentence);

var capitalizeFirstAndLast = function(input){
  var firstCharacter = input.charAt(0).toUpperCase();
  var stringLength = input.length;
  var lastCharacter = input.charAt(stringLength - 1).toUpperCase();

  return firstCharacter + lastCharacter;
}

var reverseOrder = function(input){
  var firstCharacter = input.charAt(0);
  var lastCharacter = input.charAt(1);

  return lastCharacter + firstCharacter;
}

var addToEnd = function(input){
  var reverseLetters = reverseOrder(capitalizeFirstAndLast(input));

  return input + reverseLetters;
}

var scramble = function(input){
  var stringLength = input.length / 2;
  var roundDown = Math.floor(stringLength);
  var middleCharacter = input.charAt(roundDown - 1);

  return middleCharacter + input;
}

var finalResult = function(input){
  return scramble(addToEnd(input));
}

var finalReverse = function(input){
  var stringLength = input.length;
  var outputString = "";
  for (i = 0; i < stringLength; i++)
  {
    var currentChar = input.charAt(i);
    outputString = currentChar + outputString;
  }

  return outputString;
}

// alert(finalResult(sentence) + "\n" + finalReverse(finalResult(sentence)));

$(document).ready(function() {

  $("h1").click(function(){
    alert("This is a header.");
  });

  $("p").click(function(){
    alert("This is a paragraph.");
  });

  $(document.getElementById("dog1")).click(function(){
    alert(sentence);
  });

  $(document.getElementById("dog2")).click(function(){
    alert(finalReverse(finalResult(sentence)));
  });

});
