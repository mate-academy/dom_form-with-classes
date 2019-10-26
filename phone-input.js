class PhoneInput extends Input {
  constructor() {
    super();
    this.input.setAttribute('type', 'phone');
    this.input.setAttribute('placeholder', 'Your phone');
  }

  validate() {
    const valid = !!this.input.value.match(/(?:\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[34569]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/);
    
    if(valid) {
      this.input.style.border = '2px solid black';
      return true;
    } else {
      this.input.style.border = '2px solid orange';
      this.input.setAttribute('placeholder', 'Could you enter your correct phone?')
      return false;
    }
  }
}