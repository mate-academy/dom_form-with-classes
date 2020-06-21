class Form {
  constructor() {
    this.form = document.createElement('form');
    this.form.className  = 'form';
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

  render(container) {
    const button = new Button();

    this.form.append(button.button);
    this.form.addEventListener('submit', this.#formSubmit);

    container.append(this.form);
  }

  #formSubmit = event => {
    event.preventDefault();

    const inputData = [...this.form.children]
      .filter(inputed => inputed.className !== 'button');
    
    if (this.#validationChecker(inputData)) {
      const validData = this.#getData(inputData);

      this.setSubmit(validData);
      this.form.reset();
    }
  }

  #validationChecker = function(inputs) {
    const nonValid = inputs.find(inputed => (
      inputed.value.length < 4 && inputed.value && inputed.required
    ));

    if (nonValid) {
      this.setValidationError({ getName: () => nonValid.name });

      return false;
    }

    return true;
  }

  #getData = function(inputs) {
    const setInputData = (data, inputed) => {
      data[inputed.name] = inputed.value || '';

      return data;
    }

    return inputs.reduce(setInputData, {});
  }
}
