document.addEventListener('DOMContentLoaded', () => {
  const form = new Form();

  const name = new Input();
  name.setName('name');
  name.setRequired(true);
  form.addInput(name);

  const email = new EmailInput();
  email.setName('email');
  email.setRequired(true);
  form.addInput(email);

  const phone = new PhoneInput();
  phone.setName('phone');
  form.addInput(phone);

  const comment = new Input();
  comment.setName('comment');
  form.addInput(comment);

  form.render(document.getElementById('form-container'));

  document.getElementById('form-container').querySelector('form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      form.setSubmitCallback(data => {
        console.log('Name: ' + data.name);
        console.log('Email: ' + data.email);
        console.log('Phone: ' + data.phone);
        console.log('Comment: ' + data.comment);
      });

      form.setValidationErrorCallback(input => {
        console.log('Invalid input: ' + input.name);
        input.style.border = '1px solid red';
      });

      form.disableButton();

      const message = document.createElement('span');
      
      message.className = 'form__message';
      message.textContent = 'Check console.';

      this.append(message);
    })
});
