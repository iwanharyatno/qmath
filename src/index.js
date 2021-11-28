import { setting } from './settings';

function main() {
    setting.init();
    const problemFrame = document.getElementById('problem');
    const fieldNum1 = document.getElementById('num-1');
    const fieldNum2 = document.getElementById('num-2');
    const fieldOperator = document.getElementById('operator');
    const fieldResult = document.getElementById('result');
    
    const buttonEvaluate = document.getElementById('evaluate');
    const buttonRandom = document.getElementById('random');

    buttonRandom.onclick = function() {
        fieldNum1.textContent = random(setting.NUM1_MIN, setting.NUM1_MAX);
        fieldNum2.textContent = random(setting.NUM2_MIN, setting.NUM2_MAX);
        
        problemFrame.setAttribute('class', '');
        fieldResult.value = '';
    };
    buttonEvaluate.onclick = function() {
        let result = 0;
        switch(fieldOperator.textContent) {
            case '+':
                result = Number(fieldNum1.textContent) + Number(fieldNum2.textContent);
                break;
            case '-':
                result = Number(fieldNum1.textContent) - Number(fieldNum2.textContent);
                break;
            case '×':
                result = Number(fieldNum1.textContent) * Number(fieldNum2.textContent);
                break;
            case ':':
                result = Number(fieldNum1.textContent) / Number(fieldNum2.textContent);
                result = Math.round(result * 100) / 100;
                break;
        }

        if (result === Math.round(Number(fieldResult.value) * 100) / 100) {
            problemFrame.setAttribute('class', 'correct');
        } else {
            problemFrame.setAttribute('class', 'wrong');
        }
    };
}

function random(min, max) {
    const value = min + (Math.random() * (max - min));
    return Math.round(value);
}

window.onload = main;
