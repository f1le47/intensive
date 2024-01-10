// const Person = Object.create();
const Person = {
  anyValue: 'any',
  anyMethod: function () {
    console.log(this.anyValue);
  }
};

// const Person2 = Object.create(Person);
// Person2.anyValue = 'any2';
const Person2 = {
  anyValue: 'any2'
};
Object.setPrototypeOf(Person2, Person);

Object.prototype.logInfo = function () {
  console.log(this);
};
