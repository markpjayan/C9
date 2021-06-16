var n1,n2;
var num1, num2;
var b1,b2,b3,b4;

function setup(){
  createCanvas(400,400);

  n1=createInput();
  n1.position(5,60);
  
  n2=createInput();
  n2.position(200,60);

  b1=createButton("add");
  b1.position(10,200);
b1.mousePressed(add);

b2=createButton("subtract");
  b2.position(100,200);
b2.mousePressed(subtract);

b3=createButton("multiply");
  b3.position(200,200);
b3.mousePressed(multiply);

b4=createButton("division");
  b4.position(300,200);
b4.mousePressed(division);
}

function draw(){
  background("white");
  text( "number 1",70,50);
  text( "number 2",270,50)
num1=parseInt(n1.value())
num2=parseInt(n2.value())
}
function add(){
  console.log(num1+num2)
}

function subtract(){
  console.log(num1-num2)
}

function multiply(){
  console.log(num1*num2)
}

function division(){
  console.log(num1/num2)
}

