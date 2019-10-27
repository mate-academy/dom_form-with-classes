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

  setRequired(bool) {
    return bool;
  }

  validate() {
    if (!this.input.value && this.input.name !== 'comment') {
      this.input.style.border = '2px solid red';
      this.input.setAttribute('placeholder', 'Please, enter your email')
      return false;
    } else if(!this.input.value) {
      this.input.style.border = '2px solid #FCC304';
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