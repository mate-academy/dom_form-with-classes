class Form {
  constructor() {
    this.form = document.createElement('form');

    this.form.className = 'form';
  }

  _addButton() {
    const button = document.createElement('button');
    
    button.className = 'button';
    button.type = 'submit';
    button.textContent = 'Submit';
    
    this.form.append(button);
  }

  addInput(element) {
    this.form.append(element.input);
  }

  setSubmitCallback(callback) {
    callback(this.form);
  }

  setValidationErrorCallback(callback) {
    for (const input of this.form.children) {
      if (input.value.length < 4 && input.required
        || (input.name === 'name' && /\d/.test(input.value))) {
        callback(input);
      }
    }
  }

  render(wrapper) {
    this._addButton();

    wrapper.append(this.form);
  }
}
