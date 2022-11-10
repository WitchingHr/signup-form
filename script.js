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
    if (confirm !== password) {
        // document.querySelector('button').disabled = true;
        document.querySelector('.password_error').style.opacity = 1
    } else {
        // document.querySelector('button').disabled = false;
        document.querySelector('.password_error').style.opacity = 0
    }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    document.querySelector('.password_error').classList.add('shake');
})

const error = document.querySelector('.password_error');
error.addEventListener('animationend', () => {
    error.classList.remove('shake');
})
