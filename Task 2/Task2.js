const num = prompt('Введите число ниже: ');
if (Number.isInteger(parseInt(num))){
    alert('Сумма чисел, которые кратны 3 ИЛИ 5, но меньше заданного числа: ' + getAllAliquotesof3Or5(num));
    location.reload();
}
else{
    alert('Введены неправильные данные!');
    location.reload();
}

function getAllAliquotesof3Or5(intValue){
    let answer=0;
    for (let i=1;i<intValue; i++){
        if (i%3===0 || i%5===0){
            console.log('Определяемое число: ' + i);
            console.log('Ответ на данном моменте: '+answer)
            answer+=i;
        }
    }
    return answer;
}