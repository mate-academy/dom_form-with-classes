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

    const inputs = this.#getValidInputs();

    this.setSubmit(inputs);

    this.form.after(Form.message);
  }

  #getValidInputs = function() {
    const data = {};

    for (const input of this.form.children) {
      if (this.#checkValidation(input)) {
        this.setValidationError({ getName: () => input.name });

        input.style.border = '1px solid red';
      } else {
        data[input.name] = input.value;
      }
    }

    return data;
  }

  static get message() {
    const message = document.createElement('div');

    message.className = 'form__message';
    message.textContent = 'Check console.';

    return message;
  }

  #checkValidation = function(input) {
    return input.value.length < 4 && input.value && input.required;
  }
}
