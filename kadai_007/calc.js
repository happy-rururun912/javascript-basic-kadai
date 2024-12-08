//１以上の値を代入
let num = 15;

//3と５の倍数なら
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}
//３の倍数なら
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
//５の倍数なら
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
//それ以外の時は
else {
  console.log(num);
}


