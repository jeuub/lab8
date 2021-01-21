/* pervoe */
var btn1 = document.getElementById('z1');

function sheep() {
  let a = prompt('Введите число: ');
  let answer = '';
  for (let i = 1; i <= a; i++){
    answer = answer + `${i} овечка...`;
  }
  console.log(answer);
}
btn1.onclick = sheep;

/* vtoroe */
var btn2 = document.getElementById('z2');

function oddandeven() {
  let a = prompt('Введите число:', [15]);
  for (let i = 0; i <= a; i++) {
    if (i % 2 ==0) {console.log(`${i} четное`)}
    else {
      console.log(`${i} нечетное`);
    }  
  }
}
btn2.onclick = oddandeven;

/* tret'e */
var btn3 = document.getElementById('z3');
function chess() {
  for (let i = 0;i<8;i++){
   let a = "# # # #";
   if (i % 2 == 0) {
     a=" " + a;
   }
   console.log(a); 
  }
}
btn3.onclick = chess;

/* chetvertoe */
var btn4 = document.getElementById('z4');
function sort() {
  let nums = String;
  let numarray;
  let t;
  nums = prompt('Введите числа:');
  re = / /gi;
  nums = nums.replace(re, '');
  numarray = nums.split(',');
  
  for (let i = 0; i <= nums.length; i++){
    for (let j = nums.length - 1;j > i; j--) {
      if  (numarray[j-1] > numarray[j]) {
        t = numarray[i];
        numarray[i] = numarray[j];
        numarray[j] = t;
      }
    }
  }

  console.log(numarray.join(", "));
}
btn4.onclick = sort;

/* pyatoe */
var btn5 = document.getElementById('z5');

function maximum() {
  let nums = prompt('Введите числа:');
  re = / /gi;
  nums = nums.replace(re, '');
  numarray = nums.split(',');
  let max = numarray[0];
  for (let i = 1; i<=numarray.length;i++){
    if (max< numarray[i]) max = numarray[i];
  }
  console.log(max);
}
btn5.onclick = maximum; 