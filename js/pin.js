function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin()
    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('random-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberInput = document.getElementById('typed-input');
    if (isNaN(number)) {
        if (number == 'C') {
            numberInput.value = ''
        }
    }
    else {
        const previousNumber = numberInput.value;
        const newnumber = previousNumber + number;
        numberInput.value = newnumber;
    }
})

function verifyPin() {
    const pin = document.getElementById('random-input').value;
    const typedNum = document.getElementById('typed-input').value;
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (pin == typedNum) {
        success.style.display = 'block'
        danger.style.display = 'none'
    }
    else {
        danger.style.display = 'block'
        success.style.display = 'none'
    }
}