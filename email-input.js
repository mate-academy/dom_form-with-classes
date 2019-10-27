class EmailInput extends Input {
  constructor() {
    super();
    this.input.setAttribute('type', 'email');
    this.input.setAttribute('placeholder', 'Your email');
  }

  validate() {
    const valid = !!this.input.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    if (valid) {
      this.input.style.border = '2px solid black';
      return true;
    } else {
      this.input.style.border = '2px solid red';
      this.input.setAttribute('placeholder', 'Please, write your email')
      return false;
    }
  }
}