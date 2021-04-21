var axios = require('axios');

class Person {
  name = "narf";

  say_hello () {
    setTimeout(function () {
      console.log(this.name);
    });
  }
}

var p = new Person();
p.say_hello();
