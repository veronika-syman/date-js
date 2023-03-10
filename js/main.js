'use strict'

let randomNumber = Math.ceil( Math.random() * 100 );
console.log('Кoмп загадал число' +randomNumber);

const startTime = performance.now();

let userNumber = +prompt('Я загадал число от 1 до 100.\nУгадай что это за число:');

while ( userNumber != randomNumber && userNumber != 0 ) {
   if(userNumber>randomNumber) userNumber = +prompt('Моё число больше ' + userNumber + '.\nПопробуйте снова:');
   else userNumber = +prompt( 'Моё число меньше ' + userNumber + '.\nПопробуйте снова:');
   }

   const gameTime = performance.now() - startTime;

