let num = prompt('Введите число ниже: ');
//console.log(Number.isInteger(parseInt(num)));
console.log('Введенное число: ' + num);
console.log('Длина массива: ' + num.toString().split('').length);
 if (Number.isInteger(parseInt((num)))){
    rec(num);
    location.reload();
 }
 else{
    
    alert('Вы ввели нецелое число или неверные символы!');
    location.reload();
 }

 function rec(intValue){
    let digits = intValue.toString().split('');
    //console.log(digits.map(Number));
    let answer = 0;
    for (let i=0; i<digits.length;i++){
        answer+=parseInt(digits[i]);
        console.log('На данном этапе ответ: ' + answer);
    }
    if (answer>9){
        let newDigits = answer.toString().split('');
        let tempValue = 0;
        for (let j=0; j<newDigits.length;j++){
            console.log('Длина нового массива: ' + newDigits.length);
            tempValue+= parseInt(newDigits[j]);
        }
        console.log('Промежуточное значение: ' + tempValue);
        return rec(tempValue);
    }
    else{
        alert('Ответ: ' +answer);
    }
    
    
 }
 