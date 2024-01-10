class Person {}

class PersonThree extends Person {
  #name;
  anyValue;

  constructor(value) {
    this.anyValue = value;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value.length < 2) throw new Error('Too short!')

    this.#name = value;
  }
}