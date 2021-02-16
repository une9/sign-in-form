function buttonFunc() {
    const idInput = document.getElementsByName('id')[0];
    const pwInput = document.getElementsByName('pw')[0];

    if (idInput.value && pwInput.value) {
        alert('안됩니다😂');
        window.location.href = 'index.html';
    } else if (idInput.value === '') {
        idInput.classList.add('x');
    } else if (pwInput.value === '') {
        pwInput.classList.add('x');
    }

}

function inputFunc(e) {
    const input = e.currentTarget.value;
    if (input) {
        e.currentTarget.classList.remove('x');
    }
}

function enterkey() {
    if (window.event.keyCode == 13) {
        buttonFunc();
    }
}

const button = document.querySelector('input[type=submit]');
const idInput = document.getElementsByName('id')[0];
const pwInput = document.getElementsByName('pw')[0];
button.addEventListener('click', buttonFunc);
idInput.addEventListener('input', inputFunc);
pwInput.addEventListener('input', inputFunc);