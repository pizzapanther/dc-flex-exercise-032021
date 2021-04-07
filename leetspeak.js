function leetspeak (text) {
  var leet_text = '';
  var leet = {
    A: 4,
    E: 3,
    G: 6,
    I: 1,
    O: 0,
    S: 5,
    T: 7
  };

  for (var i=0; i < text.length; i++) {
    var char = text[i];
    if (leet[char.toUpperCase()] !== undefined) {
      char = leet[char.toUpperCase()];
    }

    leet_text = leet_text + char;
  }

  return leet_text;
}

var ans = leetspeak('Leet toss a Git');

console.log(ans);

function printBox (width, height) {
  for (var i=0; i < height; i++) {
    var line = '';

    for (var j=0; j < width; j++) {
      if (i == 0 || i == height - 1) {
        line = line + '*';
      } else {
        if (j == 0 || j == width - 1) {
          line = line + '*';
        } else {
          line = line + ' ';
        }
      }
    }

    console.log(line);
  }
}

printBox(6, 4);
