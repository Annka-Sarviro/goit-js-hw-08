
    import throttle from 'lodash.throttle';

    const formEl = document.querySelector('.feedback-form');
    const inputEl = formEl.querySelector('input');
    const messageEl = formEl.querySelector('textarea');
    const LOCAL_KEY = "feedback-form-state"
    const userForm = {};


    formEl.addEventListener('submit', onSubmitForm);
    formEl.addEventListener('input', throttle(onInputForm, 500));
    getSaveForm();
   



    function onSubmitForm(event) {
        event.preventDefault();
        if (!userForm.email || !userForm.message) {
            console.log('add you message or email')
        } else  {
            console.log(userForm)
            formEl.reset();
            localStorage.clear();
                    
             }
    };

    function onInputForm() {
        userForm.email = inputEl.value;
        userForm.message = messageEl.value

        localStorage.setItem(LOCAL_KEY, JSON.stringify(userForm))
    };

    function getSaveForm() {
        const parsedForm = JSON.parse(localStorage.getItem(LOCAL_KEY));

        if (!parsedForm) {return}
        if (parsedForm.email) {
                    formEl.elements.email.value = parsedForm.email;}

        if (parsedForm.message) {
                    formEl.elements.message.value = parsedForm.message;}
    };
