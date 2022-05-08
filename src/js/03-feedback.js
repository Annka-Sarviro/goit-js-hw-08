
    import throttle from 'lodash.throttle';

    const formEl = document.querySelector('.feedback-form');
    const inputEl = formEl.querySelector('input');
    const textareaEl = formEl.querySelector('textarea');
    const LOCAL_KEY = "feedback-form-state"
    
const setForm = function() {
        const savedForm = localStorage.getItem(LOCAL_KEY);
        const parsedForm = JSON.parse(savedForm);
        
        
        if (parsedForm) {
            formEl.elements.email.value = parsedForm.email;
            formEl.elements.message.value = parsedForm.message; 
            }
    }

const clearMessage = function(event) {
    event.preventDefault();
    localStorage.clear();
    console.log(userForm);
    formEl.reset();
}

const onFormSetLocal = function (event) {
    userForm[event.target.name] = event.target.value;   
    localStorage.setItem(LOCAL_KEY, JSON.stringify(userForm))
}

let userForm = {};
formEl.addEventListener('input', throttle(onFormSetLocal, 500));
formEl.addEventListener("submit", clearMessage);
setForm();




   
