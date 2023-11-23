const btn = document.querySelector(".btn-three"),
    body = document.querySelector('body');

btn.addEventListener('click', () => {
    if (body.className === '') {
        body.classList.add('dark')
    } else body.className = ''
})