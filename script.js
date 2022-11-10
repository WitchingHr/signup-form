const submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', () => {
    const invalid = document.querySelectorAll('input:invalid');
    invalid.forEach(item => {
        item.classList.add('invalid');
    });
});

function checkMatch() {
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const passInput = document.getElementById('password');
    const confInput = document.getElementById('confirm');
    if (confirm !== password) {
        document.querySelector('.password_error').style.opacity = 1
        passInput.setCustomValidity('Password mismatch');
        confInput.setCustomValidity('Password mismatch');
    } else {
        document.querySelector('.password_error').style.opacity = 0
        passInput.setCustomValidity('');
        confInput.setCustomValidity('');
    }
    button.addEventListener('click', () => {
        passInput.reportValidity();
        confInput.reportValidity();
    });
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            passInput.reportValidity();
            confInput.reportValidity();
        }
    })
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    document.querySelector('.password_error').classList.add('shake');
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        document.querySelector('.password_error').classList.add('shake');
    }
})

const error = document.querySelector('.password_error');
error.addEventListener('animationend', () => {
    error.classList.remove('shake');
})

const phone = document.getElementById('phone');
phone.addEventListener('input', () => {
    if (phone.value.length === 3) {
        phone.value += '-'
    } else if (phone.value.length === 7) {
        phone.value += '-'
    }
})