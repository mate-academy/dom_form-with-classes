class Input {
  constructor() {
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
    this.input.className = 'feedback-form__input';
    this.input.setAttribute('placeholder', 'Your name');
  };

  setName(name) {
    this.input.name = name;
  }

  getName() {
    return this.input.name;
  }

  setRequired(boolean) {
    if(boolean) {
      this.input.required = 'required';
    }
  }

  validate() {
    if(!this.input.value && this.setRequired() === 'required') {
      this.input.style.border = '2px solid red';
      return true;
    } else if(!this.input.value) {
      this.input.style.border = '2px solid orange';
      this.input.setAttribute('placeholder', 'Could you write something?')
      return false;
    } else {
      this.input.style.border = '2px solid black';
      return true;
    }
  }

  render() {
    return this.input;
  }
}