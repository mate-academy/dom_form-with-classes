class EmailInput extends Input {
  constructor() {
    super();
    this.DOMRepresentation.type = 'email';
    this.DOMRepresentation.pattern = '^\\S+@\\w+\\.\\w{1,}$';
  }
}
