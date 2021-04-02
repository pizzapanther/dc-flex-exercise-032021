class Person {
  name = "narf";

  say_hello () {
    setTimeout(() => {
      // this: functional context
      console.log('The persons is', this.name);
    });
  }
}

var p = new Person();
p.say_hello();
