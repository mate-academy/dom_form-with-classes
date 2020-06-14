class Input {
  constructor() {
    this.input = document.createElement('input');
  }

  setName(name) {
    this.input.name = name;
  }

  setRequired(value) {
    this.input.required = value;
  }
}
