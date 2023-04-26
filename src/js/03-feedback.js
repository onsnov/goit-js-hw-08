import '../css/03-feedback.css';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const dataForm = {}
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};
refs.form.addEventListener('input', throttle(onTextareaInput,500));   
refs.form.addEventListener('submit', onSubmit);

 function onTextareaInput(event) { 
     dataForm.message = refs.input.value;
     dataForm.email = refs.textarea.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
 }

function onSubmit(event) { 
    event.PreventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(dataForm);

}

