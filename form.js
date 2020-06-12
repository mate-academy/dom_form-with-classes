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
    const form = this.form;
    const message = this.#getMessage();
    const setSubmit = this.setSubmit;
    const setValidationError = this.setValidationError; 
    const getInputsValues = this.#getInputsValues;

    this.#addButton();

    wrapper.append(form);

    this.form.addEventListener('submit', function(e) {
      e.preventDefault();

      const inputs = getInputsValues(form);

      setSubmit(inputs);

      for (const [key, value] of Object.entries(inputs)) {
        if (value.length < 4 || (key === 'name' && /\d/.test(value))) {
          setValidationError({ name: key });
        }
      }

      form.append(message);
    });
  }

  #addButton = function() {
    const button = document.createElement('button');

    button.className = 'button';
    button.type = 'submit';
    button.textContent = 'Submit';

    this.form.append(button);

    return button;
  }

  #getMessage = function() {
    const message = document.createElement('span');

    message.className = 'form__message';
    message.textContent = 'Check console.';

    return message;
  }

  #getInputsValues = function(form) {
    const inputs = {};

    for (const input of form.children) {
      if (input.name) {
        inputs[input.name] = input.value; 
      }
    }

    return inputs;
  }
}
