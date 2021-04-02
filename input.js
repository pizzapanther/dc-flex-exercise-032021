var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How's it going? ", function(answer) {
  console.log("Awesomesauce:", answer);
  rl.close();
});

for (var i=0; i < 10; i++) {
  console.log('hello');
}
