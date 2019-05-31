class Form {
  constructor() {
    this.inputs = [];
    this.data = {};
  }

  addInput(input) {
    this.inputs.push(input);
  }

   setSubmitCallback(callback) {
    this.submitCallback = callback;
  }

  setValidationErrorCallback(callback) {
    this.validationCallback = callback;
  }

  render(container) {
    const form = document.createElement('form');
    
    for (let currentInput of this.inputs) {
      const label = document.createElement('label');
      label.textContent = `${currentInput.name}: `;
      label.classList.add('input');

      const input = document.createElement('input');
      input.required = currentInput.required;

      input.addEventListener('input', (event) => {
        const { target } = event;
        currentInput.value = target.value.trim();
        this.data[currentInput.name] = currentInput.value;
      })

      label.append(input);
      form.append(label);
    }
    
    const submit = document.createElement('button');
    submit.textContent = 'Submit';

    submit.addEventListener('click', (event) => {
      event.preventDefault();
      const incorrectInput = this.inputs.find(input => !input.validate())
      if (incorrectInput) {
        this.validationCallback(incorrectInput);
        return;
      }

      this.submitCallback(this.data)
    })

    form.append(submit);
    container.append(form);
  };
}