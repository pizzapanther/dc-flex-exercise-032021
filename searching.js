var guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];

var find = 'Peacock';

for (var i=0; i < guests.length; i++) {
  if (guests[i] == find) {
    console.log("Found by loop!");
    break;
  }
}

function find_name (name) {
  if (name == find) {
    console.log("Found by forEach!");
  }
}

guests.forEach(find_name);

console.log(
  'IndexOf',
  guests.indexOf(find)
);

console.log(
  'includes',
  guests.includes(find)
);

console.log(
  'find',
  guests.find(function (value) {
    return value[0] == 'P';
  })
);





