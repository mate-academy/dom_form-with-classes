class PhoneInput extends Input {
  constructor() {
    super();
    this.DOMRepresentation.type = 'tel';
    this.DOMRepresentation.pattern = '^\\d{3}[-|\\s]?\\d{2}[-|\\s]?\\d{2}[-|\\s]?\\d{3}$';
  }
}
