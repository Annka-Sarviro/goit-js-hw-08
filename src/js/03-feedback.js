
    import throttle from 'lodash.throttle';

    const formEl = document.querySelector('.feedback-form');
    const inputEl = formEl.querySelector ('input');
    const textEl = formEl.querySelector('textarea')
    const LOCAL_KEY = "feedback-form-state"
    

    const savedForm = localStorage.getItem(LOCAL_KEY);
    const parsedForm = JSON.parse(savedForm);
    
    if (parsedForm) {
        textEl.textContent = parsedForm.message;
        inputEl.value = parsedForm.email;     
    }
    
const clearMessage = function(event) {
    event.preventDefault();
    localStorage.clear();
    console.log(userForm)
    formEl.reset()
}

const onFormSetLocal = function (event) {
    userForm[event.target.name] = event.target.value;    
    localStorage.setItem(LOCAL_KEY, JSON.stringify(userForm))
}

const userForm = {}

formEl.addEventListener('input', throttle(onFormSetLocal, 500));
formEl.addEventListener("submit", clearMessage);


