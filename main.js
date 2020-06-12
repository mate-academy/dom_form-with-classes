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

  form.setSubmitCallback(data => {
    console.log('Name: ' + data.name);
    console.log('Email: ' + data.email);
    console.log('Phone: ' + data.phone);
    console.log('Comment: ' + data.comment);
  });

  form.setValidationErrorCallback(input => {
    console.log('Invalid input: ' + input.name);
  });

  form.render(document.getElementById('form-container'));
});
