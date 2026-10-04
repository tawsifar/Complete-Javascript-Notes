// Static methods belong to the class itself, not its instances.

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(10, 20));

// This does not work because add() is not an instance method.
// const helper = new MathHelper();
// helper.add(10, 20);
