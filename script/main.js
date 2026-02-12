const API_URL = 'https://23quo4pddg.execute-api.ap-southeast-2.amazonaws.com/default/mayeyandsam';

const getById = (selector) => {
    return document.getElementById(selector);
};

const select = (selector) => {
    return document.querySelector(selector);
};

const all = (selector) => {
    return document.querySelectorAll(selector);
};

const resetDialog = () => {
    console.log('resetting dialog...');
};

const submitForm = async () => {
    let submitResponse = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: getById('your_email').value,
            message: getById('your_msg').value
        })
    });
    submitResponse = await submitResponse.json();
    console.log('sendInquiry submitResponse', submitResponse);

    select('dialog').close();
    resetDialog();
};

const validateEmail = (email) => {
    console.log(`Validating "${email}"...`);
    if (!email) {
        const ERROR = 'Please enter a valid email address 1.';
        console.log(ERROR);
        alert(ERROR);
        return false;
    }

    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    // const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!pattern.test(email)) {
        const ERROR = 'Please enter a valid email address.';
        console.log(ERROR);
        alert(ERROR);
        return false;
    }

    return true;
};

select('dialog').showModal();

getById('avail').addEventListener('click', (e) => {
    select('dialog').showModal();
});

getById('cancel_avail').addEventListener('click', (e) => {
    select('dialog').close();
});

getById('submitForm').addEventListener('click', (e) => {
    e.preventDefault();
    let email = getById('your_email').value;
    if (!validateEmail(email)) {
        return;
    }

    all('.blurb').forEach(el => {
        if (!el.classList.contains('hidden')) {
            el.classList.add('hidden');
        }
        select('.blurb.pending').classList.remove('hidden');
    });

    getById('form-fields').classList.add('hidden');
    getById('form-loader').classList.remove('hidden');

    // Submit to AWS
    submitForm();

    // Submit to database
});