class Input {
  constructor() {
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
  }

  setName(name) {
    this.input.name = name;
  }

  getName() {
    return this.input.name;
  }

  setRequired(bool) {
    if (bool) {
      this.input.required = 'required'
    }
  }

  getValue() {
    return this.input.value;
  }

  validate() {
    return true;
  }

  render() {
    return this.input;
  }
}