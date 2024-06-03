// task1

// let a = 100;
// let q1 = a % 33;

// if (q1 > 30) {
//     let q2 = q1 % 14;

//     if (q2 > 10) {
//         let q3 = q2 % 5;
//         console.log(q3);
//     } else {
//         console.log("q2 10-dan böyük deyil: " + q2);
//     }
// } else {
//     console.log("q1 30-dan böyük deyil: " + q1);
// }


// task2

// const widthInput = document.getElementById('width');
// const lengthInput = document.getElementById('length');

// function calculate() {
//     const width = parseFloat(widthInput.value);
//     const length = parseFloat(lengthInput.value);

//     let result;
//     if (width > 10 && length > 10) {
//         result = "Sahə: " + (width * length);
//     } else {
//         result = "Perimetr: " + (2 * (width + length));
//     }

//     document.getElementById('result').innerHTML = result;
// }

// widthInput.addEventListener('input', calculate);
// lengthInput.addEventListener('input', calculate);



// task3

// let side = 6; 
// let area = side * side;


// if (area > 25) {
//     let remainder = area % 12;
//     console.log("sahe " + area);
//     console.log("qaliq " + remainder);
// } else {
//     console.log("." + area);
// }