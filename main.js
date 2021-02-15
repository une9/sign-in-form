function nicknameCheck(e) {
    const inputE = e.currentTarget;
    const input = inputE.value;
    const alertText = document.getElementsByClassName('nick-alert')[0];

    const bool = /^[가-힣a-zA-Z0-9]+$/.test(input);

    if (bool) {
        inputE.classList.remove('x');
        inputE.classList.add('o');
        if (input) {
            alertText.classList.remove('alert-display');
        }
    } else {
        inputE.classList.remove('o');
        inputE.classList.add('x');
        if (input) {
            alertText.classList.add('alert-display');
        }
    }
}

function idCheck(e) {
    const inputE = e.currentTarget;
    const input = inputE.value;
    const alertText = document.getElementsByClassName('id-alert')[0];

    const bool1 = /^[a-zA-Z](?=.*[0-9]).{4,11}$/.test(input);
    const bool2 = /^[0-9]+.*/.test(input);

    if (bool1) {
        inputE.classList.remove('x');
        inputE.classList.add('o');
        alertText.classList.remove('alert-display');
    } else {
        inputE.classList.remove('o');
        inputE.classList.add('x');
        if (bool2) {
            alertText.classList.add('alert-display');
        } else if (!input) {
            alertText.classList.remove('alert-display');
        }
    }
}

function pwCheck(e) {
    const inputE = e.currentTarget;
    const input = inputE.value;
    
    const special = document.getElementById('special');
    const upperCase = document.getElementById('upper-case');
    const lowerCase = document.getElementById('lower-case');
    const length = document.getElementById('length');
    const list = new Array([/[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]/, special], [/[A-Z]/, upperCase], [/[a-z]/, lowerCase], [/.{6,12}/, length]);
    let num = 0;
    for (let pair of list) {
        if (pair[0].test(input)) {
            pair[1].classList.add('yes');
            num++;
        } else {
            pair[1].classList.remove('yes');
            num--;
        }
    }
    
    // const bool = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{6,12}$/.test(input);
    if (num === 4) {
        inputE.classList.remove('x');
        inputE.classList.add('o');
    } else {
        inputE.classList.remove('o');
        inputE.classList.add('x');
    }
}

function pw2Check(e) {
    const inputE = e.currentTarget;
    const input = inputE.value;
    const pw = document.getElementById('pw');

    if (input === pw.value) {
        inputE.classList.remove('x');
        inputE.classList.add('o');
    } else {
        inputE.classList.remove('o');
        inputE.classList.add('x');
    }
}

function radioButtonFunc(e) {
    console.log(e);
}


function main() {
    const nicknameInput = document.getElementById('nickname');
    const idInput = document.getElementById('id');
    const pwInput = document.getElementById('pw');
    const pw2Input = document.getElementById('pw2');

    nicknameInput.addEventListener('input', nicknameCheck);
    idInput.addEventListener('input', idCheck);
    pwInput.addEventListener('input', pwCheck);
    pw2Input.addEventListener('input', pw2Check);

    const radioButtons = document.getElementsByName('sex');
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('change', radioButtonFunc);
    }
}

main();