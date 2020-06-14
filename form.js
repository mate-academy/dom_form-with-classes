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

    const inputs = [...this.form.children]
      .filter(input => input.tagName !== 'BUTTON');

    if (this.#checkValidation(inputs)) {
      const inputsData = this.#getInputsData(inputs);

      this.setSubmit(inputsData);
    }

    this.form.after(Form.message);
  }

  #checkValidation = function(inputs) {
    const wrongInput = inputs.find(input => (
      input.value.length < 4 && input.value && input.required
    ));

    if (wrongInput) {
      this.setValidationError({ getName: () => wrongInput.name });

      wrongInput.style.border = '1px solid red';

      return false;
    }

    return true;
  }

  #getInputsData = function(inputs) {
    const setInputData = (data, input) => {
      data[input.name] = input.value || '';

      return data;
    }

    return inputs.reduce(setInputData, {});
  }

  static get message() {
    const message = document.createElement('div');

    message.className = 'form__message';
    message.textContent = 'Check console.';

    return message;
  }
}
