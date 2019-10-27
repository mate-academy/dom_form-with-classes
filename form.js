class Form {
  constructor () {
    this.form = document.createElement('form');
    this.submit = document.createElement('input');
    this.form.setAttribute('method', 'POST');
    this.form.setAttribute('action', '#');
    this.submit.setAttribute('type', 'Submit');
    this.submit.setAttribute('placeholder', 'Send');
    this.form.className = 'feedback-form';
    this.submit.className = 'feedback-form__submit';
    this.inputs = [];
    this.data = {};
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

  render(container) {
    for (const input of this.inputs) {
      this.label = document.createElement('label');
      this.label.className = 'feedback-form__label';
      this.label.append(input.render());
      this.form.append(this.label);
      
      if(input.input.name === 'comment') {
        input.input.setAttribute('placeholder', 'Your review');
      }
    }
    this.label = document.createElement('label');
    this.label.className = 'feedback-form__label';
    this.label.append(this.submit);
    this.form.append(this.label);
    container.append(this.form);

    this.form.addEventListener(`submit`, event => {
      event.preventDefault();
      let checker = true;

      for (const input of this.inputs) {
        let check = input.validate();
        if (check) {
          this.data[input.input.name] = input.input.value;
        } else {
          this.validationErrorCallback(input);
          checker = false;
        }
      }

      if (checker) {
        this.submitCallback(this.data);
      }
    });
  }
}