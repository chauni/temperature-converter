"use strict";

// gather inputs

const convertBtnEl = document.getElementById('convertBtn');
convertBtnEl.onclick = onConvertBtnClicked

const farenheitTempEl = document.getElementById('farenheitTemp')
const celsiusTempEl = document.getElementById('celsiusTemp');

const convertOutputEl = document.getElementById('convertOutput');

const resetBtnEl = document.getElementById('resetBtn');


// perform calculations

function onConvertBtnClicked() {
    if (farenheitTempEl == farenheitTemp) {

        const output = (farenheitTempEl.value - 32) * 5 / 9;
        convertOutputEl.value = output;
}
}

function onResetBtnClicked() {
    document.getElementById('farenheitTempEl').value = "  ";
}