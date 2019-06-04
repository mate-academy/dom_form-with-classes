class Input {
  constructor() {
    this.DOMRepresentation = document.createElement('input');
    this.DOMRepresentation.type = 'text';
    this.DOMRepresentation.pattern = '^([A-Z][a-z]+[\\s\\-]?){1,3}$';
    this.DOMRepresentation.addEventListener('input', () => {
      this.setValidState()
    });
  }

  setName(name) {
    if (name === 'comment') {
      this.DOMRepresentation = document.createElement('textarea');
    }
    this.DOMRepresentation.name = name;
  }

  getName() {
    return this.DOMRepresentation.name;
  }

  setRequired(required) {
    this.required = required;
  }

  getRequired() {
    return this.required;
  }

  setValidState() {
    this.DOMRepresentation.classList.remove('invalid_state');
  }

  setInvalidState() {
    this.DOMRepresentation.classList.add('invalid_state');
  }

  getValue() {
    return this.DOMRepresentation.value;
  }
}
