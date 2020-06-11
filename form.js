class Form {
  constructor() {
    this.form = document.createElement('form');

    this.form.className = 'form';
  }

  static addButton(form) {
    const button = document.createElement('button');
    
    button.className = 'button';
    button.type = 'submit';
    button.textContent = 'Submit';
    
    form.append(button);
  }

  disableButton() {
    this.form.querySelector('button').disabled = true;
  }

  addInput(element) {
    this.form.append(element.input);
  }

  setSubmitCallback(callback) {
    const fields = {};

    for (const input of this.form.children) {
      fields[input.name] = input.value; 
    }

    callback(fields);
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
    Form.addButton(this.form);

    wrapper.append(this.form);
  }
}
