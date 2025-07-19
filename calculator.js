const calculator = {
  // method that takes two numbers as parameters
  add(a, b) {
    return a + b;
  },
  multiply(x, y = 1) {      // default parameter y = 1
    return x * y;
  },
  describe(operation, ...nums) { // method with named + rest params
    return `Operation: ${operation}, numbers: ${nums.join(', ')}`;
  }
}

