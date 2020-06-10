class Form {
  constructor() {
    this.form = document.createElement('form');

    this.form.className = 'form';
  }

  _addButton() {
    this.button = document.createElement('button');
    
    this.button.className = 'button';
    this.button.type = 'submit';
    this.button.textContent = 'Submit';
    
    this.form.append(this.button);
  }

  disableButton() {
    this.button.disabled = true;
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
