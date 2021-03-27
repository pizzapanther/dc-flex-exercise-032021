var out1;
var out2;
const PI = 3.14;

function hello (name) {
  var output;

  output = 'Hello ' + name;
  console.log(output);

  return output;
}

function hello_nothing () {
  console.log("Hello Nothing");
}

function hello2() {
  var output = "hello2";
  return output;
}

function hello_all () {
  for (var i=0; i < arguments.length; i++) {
    console.log('Hello ' + arguments[i]);
  }
}

out1 = hello("Paul");
out2 = hello("Class");

console.log(out1, out2);

out2 = "Overwritten";

hello_nothing();
hello_nothing();

console.log(out1, out2);

hello_all();
console.log("-------");
hello_all("Argument", "Arg2", "Arg3");
