class PhoneInput {
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
    let result = this.getValue().match(/^[\s()+-]*([0-9][\s()+-]*){6,12}$/gm);
    return !!result ? true : false;
  }

  render() {
    return this.input;
  }
}