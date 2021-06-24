// let x = 10, y = 7;
//  x > y ? alert("x больше, чем y") :alert("x не больше, чем y");

// let num = +prompt("Введите число")
// if (num % 2 === 0){
//     alert("Число "+ num +" четное")
// }
// else{
//     alert("Число "+ num +" нечетное")
// }


// let num2 = prompt("Введите целое число");
// if (Math.sign(num2) === 1 ||Math.sign(num2) === 0){
//     alert("Число " + num2+ " положительное " + num2.length +"-значноe" )
// }
// else if (Math.sign(num2) === -1 ||Math.sign(num2) === -0){
//     alert("Число " + num2+ " отрицательное " + (num2.length -1) +"-значноe" )
// }



// let num1 = +prompt("Введите число");
// let num2 = +prompt("Введите число");
// let num3 = +prompt("Введите число");
// if (num1 > num2 && num1 > num3){
//     alert(num1);
// }
// else if (num2 > num1 && num2 > num3){
//     alert(num2);
// }
// else if (num3 > num1 && num3 > num2){
//     alert(num3);
// }


let length1 = +prompt("Введите длину стороны");
let length2 = +prompt("Введите длину стороны");
let length3 = +prompt("Введите длину стороны");

if (length1 + length2 > length3 && length2 + length3 > length1 && length1 + length3 > length2 ){
    alert("Такой треугольник может существовать")
}
else{
    alert("Такой треугольник не может существовать")
}







