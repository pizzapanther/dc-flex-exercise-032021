function add_event_listeners () {
  var button = document.querySelector('#my-button');
  var input = document.querySelector('#texty');
  var body = document.querySelector('body');
  var div = document.querySelector('div');
  var a = document.querySelector('a');

  button.addEventListener('click', function(event) {
    console.log(event);
  });

  div.addEventListener('click', function(event) {
    console.log(event);
  });

  a.addEventListener('click', function(event) {
    console.log(event);
  });

  input.addEventListener('keyup', function(event) {
    console.log(event);
  });

  input.addEventListener('keydown', function(event) {
    console.log(event);
  });

  // body.addEventListener('mousemove', function(event) {
  //   console.log(event);
  // });
}
