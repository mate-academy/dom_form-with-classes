class Input {
  constructor() {
    this.input = document.createElement('input');

    this.input.type = 'text';
    this.input.className = 'input';
  }

  setName(name) {
    this.input.name = name;
  }

  setRequired(value) {
    this.input.required = value;
  }

  getName() {
    return this.input.name;
  }
}