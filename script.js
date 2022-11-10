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

function addDashes(num, event) {
    num = num.replace(/[^\d]/g, '');
    if (num.length > 3) {
        num = insert(num, 3, '-');
        if (num.length > 7) {
            num = insert(num, 7, '-');
            if (num.length > 13) {
                num = insert(num, 13, '-');
            }
        }
    }
    return num;
}

function insert(string1, index, string2) {
    return string1.substring(0, index) + string2 + string1.substring(index);
}