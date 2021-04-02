var my_sentence = "this is the best class ever";

function count_letters(sentence) {
  var tracker = {};
  for (var i=0; i < sentence.length; i++) {
    var letter = sentence[i];

    if (!tracker[letter]) {
      tracker[letter] = 0;
    }

    tracker[letter]++;
  }
  return tracker;
}

console.log(count_letters(my_sentence));

// {
//   s: 4,
//   t: 5,
//   b: 1
// }
