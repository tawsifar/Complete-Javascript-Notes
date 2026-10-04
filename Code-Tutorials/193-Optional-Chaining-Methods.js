// Optional chaining with methods

const user = {
  profile: {
    greet: function () {
      return "Hello";
    }
  }
};

console.log(user.profile?.greet?.());
console.log(user.settings?.greet?.());

// Optional chaining can safely access and call methods.
