class Form {
  constructor() {
    this.DOMRepresentation = document.createElement('form');
    this.inputs = [];
    this.submitButton = document.createElement('input');
    this.submitButton.type = 'submit';
  }

  addInput(input) {
    this.inputs.push(input);
  }

  setSubmitCallback(callback) {
    this.submitButton.addEventListener('click', (clicked) => {
      clicked.preventDefault();
      if (this.showInvalid) {
        let dataIsValid = true;
        const data = this.inputs.reduce((dataAccelerator, element) => {
          dataAccelerator[element.getName()] = element.getValue();
          return dataAccelerator;
        }, {});
        this.inputs.forEach(element => {
          if (element.DOMRepresentation.pattern !== undefined) {
            let elementValidationResult = true;
            if (element.getValue() !== '') {
              elementValidationResult = (new RegExp(
                element.DOMRepresentation.pattern
              )).test(element.getValue());
            } else if (element.getRequired()) {
              elementValidationResult = false;
            }
            if (!elementValidationResult) {
              element.setInvalidState();
              this.showInvalid(element);
              dataIsValid = false;
            }
          }
        });
        if (dataIsValid) callback(data);
      }
    });
  }

  setValidationErrorCallback(callback) {
    this.showInvalid = callback;
  }

  render(container) {
    const styles = document.createElement('link');
    styles.setAttribute('rel', 'stylesheet');
    styles.setAttribute('href', './styles.css');
    document.getElementsByTagName('head')[0].appendChild(styles);

    const DOMInputs = this.inputs.map(element => {
      const wrapper = document.createElement('label');
      wrapper.innerText = `Input here your ${element.getName()}: `;
      wrapper.append(element.DOMRepresentation);
      return wrapper;
    });
    this.DOMRepresentation.append(...DOMInputs);

    this.DOMRepresentation.append(this.submitButton);
    container.append(this.DOMRepresentation);
  }
}
