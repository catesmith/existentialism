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
