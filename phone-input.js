class PhoneInput extends Input {
  constructor() {
    super();

    this.input.type = 'tel';
    this.input.pattern="(\\+[0-9]{2})?[0-9]{3}-?[0-9]{3}-?[0-9]{4}";
  }
}
