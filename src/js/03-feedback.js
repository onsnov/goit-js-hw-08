import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const dataForm = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};
refs.form.addEventListener('input', throttle(onTextareaInput,1000));   
refs.form.addEventListener('submit', onSubmit);


popularInputMessage();

 function onTextareaInput(event) { 
  //  dataForm.email = refs.input.value;   
  //  dataForm.message = refs.textarea.value;
   dataForm[event.target.name] = event .target.value;
     
   localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
   console.log(dataForm);
 }

 function onSubmit(event) { 
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(dataForm);
   if (refs.textarea.value === null || refs.input.value === null) {
     alert = 'необхідно ввести дані!';
   }
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
 




