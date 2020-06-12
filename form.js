class Form {
  constructor() {
    this.form = document.createElement('form');
  
    this.form.className = 'form';
  }

  addInput(element) {
    this.form.append(element.input);
  }

  setSubmitCallback(callback) {
    this.setSubmit = callback;
  }

  setValidationErrorCallback(callback) {
    this.setValidationError = callback;
  }

  render(wrapper) {
    this.form.append(Form.button);

    this.form.addEventListener('submit', this.#handleSubmit);

    wrapper.append(this.form);
  }

  static get button() {
    const buttonElement = document.createElement('button');

    buttonElement.className = 'button';
    buttonElement.type = 'submit';
    buttonElement.textContent = 'Submit';

    return buttonElement;
  }

  #handleSubmit = e => {
    e.preventDefault();

    const inputs = this.#getInputsValues(this.form);

    this.setSubmit(inputs);
    this.#checkValidation();

    this.form.after(Form.message);
  }

  #checkValidation = function() {
    for (const input of this.form.children) {
      if (input.value.length < 4 && input.value && input.required) {
        this.setValidationError({ getName: () => input.name });

        input.style.border = '1px solid red';
      }
    }
  }

  static get message() {
    const message = document.createElement('div');

    message.className = 'form__message';
    message.textContent = 'Check console.';

    return message;
  }

  #getInputsValues = function() {
    const inputs = {};

    for (const input of this.form.children) {
      if (input.name) {
        inputs[input.name] = input.value; 
      }
    }

    return inputs;
  }
}
