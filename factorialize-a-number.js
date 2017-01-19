function factorialize(num) {
  var result = 1;
  for (var i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

factorialize(10);