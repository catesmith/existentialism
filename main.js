var answer = prompt("What is the meaning of life?");

switch(answer) {
  case 'love':
    console.log("But there are those who do not love.");
    break;
  case 'nothing': 
    console.log("Now you're getting it.");
    break;
  case '42':
    console.log("RIP Douglas Adams");
    break;
  default:
    console.log("Might I suggest reading some Sartre?");
}

// Hmm! Since I  we don't really have time to sit down I think we should do suggestions here and stuff! Also I'm sitting around waiting for the meetup to start.
// Basically you could make this more flexable by writing a function that will check your answers for specific words. You can potentially
// run into a lot of complications, but the easiest thing to do right now is find the first word that matches, let's assume that the user writes a sentence as an answer.

// METHODS TO LOOK AT: http://devdocs.io/
// split()
// indexOf()
