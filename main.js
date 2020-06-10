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
        console.log(data.name, data.name.value);
        console.log(data.email, data.email.value);
        console.log(data.phone, data.phone.value);
        console.log(data.comment, data.comment.value);
      });

      form.setValidationErrorCallback(input => {
        console.log('Invalid input: ' + input.name);
        input.style.border = '1px solid red';
      });

      const message = document.createElement('span');
      
      message.className = 'form__message';
      message.textContent = 'Check console.';

      this.append(message);
    })
});
