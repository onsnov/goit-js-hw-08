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


popularInputMessage();

 function onTextareaInput(event) { 
   dataForm.email = refs.input.value;   
   dataForm.message = refs.textarea.value;
     
     localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
 }

 function onSubmit(event) { 
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(dataForm);
 }

function popularInputMessage(){
  const popularTextarea = JSON.parse(
  localStorage.getItem(STORAGE_KEY));
  if (popularTextarea) {
    refs.textarea.value = popularTextarea.message;
    refs.input.value = popularTextarea.email;
    console.log(popularTextarea);
   } 
}
 




