class Form {
  constructor() {
    this.form = document.createElement('form');
    this.form.setAttribute('method','post');
    this.form.setAttribute('action','#');
    this.inputs = [];

    this.submit = document.createElement('input');
    this.submit.setAttribute('type', 'submit');
  }

  addInput(input) {
    this.inputs.push(input);
  }

  setSubmitCallback(submitCallback) {
    this.submitCallback = submitCallback;  
  }

  setValidationErrorCallback(validationErrorCallback) {
    this.validationErrorCallback = validationErrorCallback;
  }

  render(htmlElem) {
    htmlElem.appendChild(this.form);

    for (const input of this.inputs) {
      this.form.appendChild(input.render());
    }

    this.form.appendChild(this.submit);
    this.form.addEventListener('submit', this.validateForm.bind(this));
  }
  
  validateForm(event) {
    event.preventDefault();
    let check = true;
    let date = {}

    for (const input of this.inputs) {
      if(!input.validate()) {
        this.validationErrorCallback(input);
        check = false;
      } else {
        date[input.getName()] = input.getValue();
      }
    }

    if (check) {
      this.submitCallback(date);
    }
  }
}