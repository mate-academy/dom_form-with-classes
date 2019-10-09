class EmailInput {
  constructor() {
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'email');
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
    let result = this.getValue().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm);
    return !!result ? true : false;
  }

  render() {
    return this.input;
  }
}