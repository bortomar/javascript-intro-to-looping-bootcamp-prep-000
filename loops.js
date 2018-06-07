
function forLoop(a) {
  for (var i = 0; i < 25; i++) {
    a.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}
