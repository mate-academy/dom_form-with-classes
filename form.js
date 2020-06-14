class Form {
  constructor() {
    this.form = document.createElement('form');
    this.submit = this.form.addEventListener('submit', this.#submitHandler);
  }

  #addButton = () => {
    const button = document.createElement('button');
    button.type = 'submit'
    button.textContent = 'Press me';
    this.form.append(button)
  }

  addInput(element) {
    this.form.append(element.input);
  }

  
  setSubmitCallback(func) {
    this.submitCallback = func;
  }
  
  setValidationErrorCallback(func) {
    this.validationError = func;
  }

  render(wrapper) {
    this.#addButton();
    wrapper.append(this.form);
  }
  
  #submitHandler = event => {
    event.preventDefault();
    const collection = event.target.elements;

    const inputs = this.#getDate(collection);
    let isValid = this.#checkvalidity(inputs);
    
    if (!isValid) {
      return;
    }
    
    this.submitCallback(inputs);
    
  }
  #getDate = collection => {
    return [ ...collection ]
    .reduce((accum, {name, value}) => {
      if (!value || !name) {
        return accum;
      }
      accum[name] = value;
      
      return accum;
    }, {});
  }


  #checkvalidity = input => {
    let isValid = true;
    const isInvalid = (field , value) => (value.length < 4 );

    for (const [name, value] of Object.entries(input)) {
      if (isInvalid(name, value)) {
        this.validationError({getName: () => name })
        isValid = false;
      }	
    }
    return isValid;
  } 
}
