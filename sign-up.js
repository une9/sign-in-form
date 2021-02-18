function nicknameCheck(e) {
    const inputE = e.currentTarget;
    const input = inputE.value;
    const alertText = document.getElementsByClassName('nick-alert')[0];

    const bool = /^[ㄱ-힣a-zA-Z0-9]+$/.test(input);

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
    
    if (num === 4) {
        inputE.classList.remove('x');
        inputE.classList.add('o');
    } else {
        inputE.classList.remove('o');
        inputE.classList.add('x');
    }

    const pw2 = document.getElementById('pw2');
    if (pw2.value !== '' && input === pw2.value) {
        pw2.classList.remove('x');
        pw2.classList.add('o');
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

function selectAllFunc(e) {
    const checkboxes = document.getElementsByClassName('checkbox');
    if (e.currentTarget.checked) {
        for (let box of checkboxes) {
            box.checked = true;
        }
    } else {
        for (let box of checkboxes) {
            box.checked = false;
        }
    }
}

function selectFunc(e) {
    const selectAll = document.getElementById('select-all');
    console.log(e.currentTarget);
    if (e.currentTarget.checked == true) {
        let unchecked = 0;
        const selectBoxes = document.querySelectorAll('#select-box input');
        for (let box of selectBoxes) {
            if (box.checked == false) unchecked++;
        }
        if (!unchecked) {
            selectAll.checked = true;
        }
    } else {
        selectAll.checked = false;
    }
}

function disabledCheck([mustcheckText, mustcheckBox]) {
    let uncheckedNum = 0;
    const submit = document.getElementById('submit');
    
    for (let x of mustcheckText) {
        if (!x.classList.contains('o')) {
            uncheckedNum++;
        }
    }
    for (let y of mustcheckBox) {
        if(y.checked == false) {
            uncheckedNum++;
        }
    }

    if (uncheckedNum) {
        if (!submit.hasAttribute('disabled')) {
            submit.setAttribute('disabled', 'disabled');
        }
    } else {
        submit.removeAttribute('disabled');
    }
}

function submitFunc(e) {
    alert('정보를 저장하지 않습니다! 로그인 페이지로 이동합니다.');
    window.location.href = '../';
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

    const selectAll = document.getElementById('select-all');
    const selectBoxes = document.querySelectorAll('#select-box input');

    selectAll.addEventListener('click', selectAllFunc);
    for (box of selectBoxes) {
        box.addEventListener('click', selectFunc);
    }
    
    const submit = document.getElementById('submit');
    submit.addEventListener('click', submitFunc);

    const mustcheckText = document.getElementsByClassName('mustcheck-text');
    const mustcheckBox = document.getElementsByClassName('mustcheck-box');
    for (let mustcheck of mustcheckText) {
        mustcheck.addEventListener('input', () => disabledCheck([mustcheckText, mustcheckBox]));
    }
}

main();