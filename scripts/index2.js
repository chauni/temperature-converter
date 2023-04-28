"use strict";

// gather inputs

const convertBtnEl = document.getElementById('convertBtn');
convertBtnEl.onclick = onConvertBtnClicked;

const farenheitTempEl = document.getElementById('farenheitTemp')
const celsiusTempEl = document.getElementById('celsiusTemp');

const convertOutputEl = document.getElementById('convertOutput');


// perform calculations

function onConvertBtnClicked() {
    if (celsiusTempEl == celsiusTemp) {

        const output = (celsiusTempEl.value * 9/ 5) + 32;
        convertOutputEl.value = output;
    }
}