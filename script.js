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
const formatter = new Intl.NumberFormat(`en-US`, {
    minimumFractionDigits:0,
    maximumFractionDigits:7,
});
ac.addEventListener(`click`, function(){
    win.style.color = `white`;
    windowValue = `0`;
    value1 = null;
    value2 = null;
    memory = null;
    win.textContent = windowValue;
});
del.addEventListener(`click`, function(){
    let newValue = windowValue.substr(0, windowValue.length - 1);
    if (newValue.length == 0) newValue = `0`;
    windowValue = newValue;
    win.textContent = windowValue;
});
butt1.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `1`;
    else{
        windowValue += `1`;
    }
    
    win.textContent = windowValue;
});
butt2.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `2`;
    else{
        windowValue += `2`;
    }
    win.textContent = windowValue;
});
butt3.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `3`;
    else{
        windowValue += `3`;
    }
    win.textContent = windowValue;
});
butt4.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `4`;
    else{
        windowValue += `4`;
    }
    win.textContent = windowValue;
});
butt5.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `5`;
    else{
        windowValue += `5`;
    }
    win.textContent = windowValue;
});
butt6.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `6`;
    else{
        windowValue += `6`;
    }
    win.textContent = windowValue;
});
butt7.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `7`;
    else{
        windowValue += `7`;
    }
    win.textContent = windowValue;
});
butt8.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `8`;
    else{
        windowValue += `8`;
    }
    win.textContent = windowValue;
});
butt9.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `9`;
    else{
        windowValue += `9`;
    }
    win.textContent = windowValue;
});
butt0.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `0`;
    // if (windowValue.includes(`.`) || windowValue == ``){
    else{
        windowValue += `0`;
    }
    win.textContent = windowValue;
});
dot.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (windowValue == 0 && !windowValue.includes(`.`)) windowValue = `0`;
    if (windowValue.includes(`.`)) return;
    else windowValue += `.`;
    win.textContent = windowValue;
});
plu.addEventListener(`click`, function(){
    win.style.color = `yellow`;
    if (value1 == null){
        operator = `+`;
        value1 = Number(windowValue);
        windowValue = `0`;
        win.textContent = value1;
        return;
    }
    if(value1 !== null){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        operator = `+`;
        windowValue = `0`;
        win.textContent = value1;
    }
});
min.addEventListener(`click`, function(){
    win.style.color = `yellow`;
    if (value1 == null){
        operator = `-`;
        value1 = Number(windowValue);
        windowValue = `0`
        win.textContent = value1;
        return;
    }
    if(value1 !== null){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        operator = `-`;
        windowValue = `0`;
        win.textContent = value1;
    }
});
mul.addEventListener(`click`, function(){
    win.style.color = `yellow`;
    if (value1 == null){
        operator = `*`;
        value1 = Number(windowValue);
        windowValue = `0`
        win.textContent = value1;
        return;
    }
    if(value1 !== null){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        operator = `*`;
        windowValue = `0`;
        win.textContent = formatter.format(value1);
    }
});
div.addEventListener(`click`, function(){
    win.style.color = `yellow`;
    if (value1 == null){
        operator = `/`;
        value1 = Number(windowValue);
        windowValue = `0`
        win.textContent = value1;
        return;
    }
    if(value1 !== null){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        operator = `/`;
        windowValue = `0`;
        win.textContent = formatter.format(value1);
    }
});
equ.addEventListener(`click`, function(){
    win.style.color = `white`;
    if (operator == `+`){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        windowValue = `0`;
        win.textContent = formatter.format(value1);
    }
    else if (operator == `-`){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        windowValue = `0`;
        win.textContent = formatter.format(value1);
    }
    else if (operator == `/`){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        windowValue = `0`;
        win.textContent = formatter.format(value1);
    }
    else if (operator == `*`){
        if(windowValue == `0`){
            value2 = memory;
        }
        else value2 = Number(windowValue);
        memory = value2;
        value1 = eval(value1 + operator +  value2);
        windowValue = `0`;
        win.textContent = formatter.format(value1);
    }
    else{
        windowValue = `equal function error`;
        win.textContent = windowValue;
    }
    value1 = null;
    value2 = null;
    memory = null;
    return;
});