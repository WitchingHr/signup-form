const submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', () => {
    const invalid = document.querySelectorAll('input:invalid');
    invalid.forEach(item => {
        item.classList.add('invalid');
    });
});