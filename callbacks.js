function add_normal(x, y) {
  console.log(x + y);
  return x + y;
}

function add (x, y, callback) {
  var result = x + y;
  setTimeout(function () {
    callback(result);
  }, 10000);
}

add_normal(1, 2);
add(1, 2, function (result) {
  console.log(result);
});

function add_closure (x) {
  var actually_add = function (y) {
    setTimeout(function () {
      console.log('closure', x + y);
    }, 3000);
  }
  return actually_add;
}

add_closure(1)(2);






