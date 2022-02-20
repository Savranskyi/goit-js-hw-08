import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

fillTheForm();

function fillTheForm() {
  const enteredData = localStorage.getItem(FORM_KEY);
  if (enteredData) {
    const { email, message } = JSON.parse(enteredData);
    form.email.value = email;
    form.message.value = message;
    formData.email = email;
    formData.message = message;
  }
}

form.addEventListener(
  'input',
  throttle(onInput => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
  }, 1000),
);

form.addEventListener('submit', onSubmit => {
  onSubmit.preventDefault();
  const formDataToSend = new FormData(onSubmit.currentTarget);
  formDataToSend.forEach((value, name) => {
    formData[name] = value;
  });
  if (!formData.email || !formData.message) return;
  onSubmit.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
  console.log(formData);
});
