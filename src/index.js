import { setting } from './settings';

function main() {
    setting.init();
    const fieldNum1 = document.getElementById('num-1');
    const fieldNum2 = document.getElementById('num-2');
    const fieldOperator = document.getElementById('operator');
    const fieldResult = document.getElementById('result');
    
    const buttonEvaluate = document.getElementById('evaluate');
    const buttonRandom = document.getElementById('random');
}

function random(min, max) {
    const value = min + (Math.random() * (max - min));
    return Math.round(value);
}

window.onload = main;
