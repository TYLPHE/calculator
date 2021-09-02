const win = document.querySelector(`.calcWindow`);
const ac = document.querySelector(`.calcAC`);
const del = document.querySelector(`.calcDel`);
const plu = document.querySelector(`.calcPlu`);
const min = document.querySelector(`.calcMin`);
const mul = document.querySelector(`.calcMul`);
const div = document.querySelector(`.calcDiv`);
const butt1 = document.querySelector(`.calc1`);
const butt2 = document.querySelector(`.calc2`);
const butt3 = document.querySelector(`.calc3`);
const butt4 = document.querySelector(`.calc4`);
const butt5 = document.querySelector(`.calc5`);
const butt6 = document.querySelector(`.calc6`);
const butt7 = document.querySelector(`.calc7`);
const butt8 = document.querySelector(`.calc8`);
const butt9 = document.querySelector(`.calc9`);
const butt0 = document.querySelector(`.calc0`);
const dot = document.querySelector(`.calcDot`);
const equ = document.querySelector(`.calcEqu`);

let value1 = null;
let value2 = null; 
let memory = null;
let operator;
let windowValue = "0";
win.textContent = windowValue;

ac.addEventListener(`click`, function(){
    windowValue = `0`;
    value1 = null;
    value2 = null;
    win.textContent = windowValue;
});
del.addEventListener(`click`, function(){
    let newValue = windowValue.substr(0, windowValue.length - 1);
    if (newValue.length == 0) newValue = `0`;
    windowValue = newValue;
    win.textContent = windowValue;
});
butt1.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `1`;
    win.textContent = windowValue;
});
butt2.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `2`;
    win.textContent = windowValue;
});
butt3.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `3`;
    win.textContent = windowValue;
});
butt4.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `4`;
    win.textContent = windowValue;
});
butt5.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `5`;
    win.textContent = windowValue;
});
butt6.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `6`;
    win.textContent = windowValue;
});
butt7.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `7`;
    win.textContent = windowValue;
});
butt8.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `8`;
    win.textContent = windowValue;
});
butt9.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = ``;
    windowValue += `9`;
    win.textContent = windowValue;
});
butt0.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `0`;
    if (windowValue.includes(`.`) || windowValue == ``){
        windowValue += `0`;
    }
    win.textContent = windowValue;
});
dot.addEventListener(`click`, function(){
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `0`;
    if(windowValue.includes(`.`)) return;
    windowValue += `.`;
    win.textContent = windowValue;
});
plu.addEventListener(`click`, function(){
    operator = `+`;
    if (value1 == null){
        value1 = Number(windowValue);
        windowValue = `0`
        win.textContent = windowValue;
        return;
    }
    if (value1 !== null){
        value2 = Number(windowValue);
    }
    if(value1 !== null && value2 !== null){
        memory = Number(value1) + Number(value2);
        value1 = memory;
        value2 = null;
        windowValue = `0`;
        win.textContent = memory;
    }
});
min.addEventListener(`click`, function(){
    operator = `-`;
    if (value1 == null){
        value1 = Number(windowValue);
        windowValue = `0`
        win.textContent = windowValue;
        return;
    }
    if (value1 !== null){
        value2 = Number(windowValue);
    }
    if(value1 !== null && value2 !== null){
        memory = Number(value1) - Number(value2);
        value1 = memory;
        value2 = null;
        windowValue = `0`;
        win.textContent = memory;
    }
});
mul.addEventListener(`click`, function(){
    operator = `*`;
    if (value1 == null){
        value1 = Number(windowValue);
        windowValue = `0`
        win.textContent = windowValue;
        return;
    }
    if (value1 !== null){
        value2 = Number(windowValue);
    }
    if(value1 !== null && value2 !== null){
        memory = Number(value1) * Number(value2);
        value1 = memory;
        value2 = null;
        windowValue = `0`;
        win.textContent = memory;
    }
});
div.addEventListener(`click`, function(){
    operator = `/`;
    if (value1 == null){
        value1 = Number(windowValue);
        windowValue = `0`
        win.textContent = windowValue;
        return;
    }
    if (value1 !== null){
        value2 = Number(windowValue);
    }
    if(value1 !== null && value2 !== null){
        memory = Number(value1) / Number(value2);
        value1 = memory;
        value2 = null;
        windowValue = `0`;
        win.textContent = memory;
    }
});
equ.addEventListener(`click`, function(){
    if(value1 != null){
        value2 = Number(windowValue);
    }
    if (operator = `+`){
        memory = Number(value1) + Number(value2);
        windowValue = `0`;
        win.textContent = memory;
    }
    if (operator = `-`){
        memory = Number(value1) - Number(value2);
        windowValue = `0`;
        win.textContent = memory;
    }
    if (operator = `/`){
        memory = Number(value1) / Number(value2);
        windowValue = `0`;
        win.textContent = memory;
    }
    if (operator = `*`){
        memory = Number(value1) * Number(value2);
        windowValue = `0`;
        win.textContent = memory;

    }
});