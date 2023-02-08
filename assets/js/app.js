///1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let str = '';
for (let i = 20; i <= 30; i=i+0.5) {
  str += i + ' ';
}
console.log(str.trim());



//2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const currencyRate$ = 27;
const step = 10;

for(let i = 1; i <= 10; i++) {
  const quantityOfDollars = i * step;
  console.log(quantityOfDollars + '$');
  
  const quantityOfGrivnas = quantityOfDollars * currencyRate$;
  console.log(quantityOfGrivnas + 'грн');
}


//3


const N = 35;

for(let i = 1; i <= 100; i++) {
  const quadro = i * i;
  
  if(N >= quadro) {
    console.log(i);
  } else {
    break;
  }
}


// 4

const num = Math.floor(Math.random() * 25);
console.log(num);

function isNumberSimple(number) {
  let notSimple;
  
  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      notSimple = true;
      break;
    }
  }
  
  if(notSimple) {
    return false;
  }
  
  if(!notSimple && number % 1 === 0  && number % number === 0) {
    return true;
  }
}

console.log(isNumberSimple(num));


// 5


const someNumber = 81;

for(let i = 3; i <= someNumber; i = i * i) {
  if(i < someNumber) {
    console.log(i)
  } else if(i === someNumber) {
    console.log('Congratulation, your number matches!')
  } else {
    console.log('Unfortunately your number didn`t matches!')
    break;
  }
}