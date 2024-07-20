
//todo-1) 1 - 100 чейинки сандарды чыгаруу

// for (let i = 0; i < 100; i++){
//   console.log(i);
// }

// let counter = 0;

// while(counter < 100){
//   console.log(counter);
//   counter++;
// }


//todo-2) 1 - 100 чейинки жуп(четный) сандарды чыгаруу


// for (let i = 0; i <= 100; i++){
//   if(i % 2 === 0)
//   console.log(i);
// }

// let counter = 0; 
// while(counter <= 100){
//   if (counter % 2 === 0){
//   console.log(counter);
//   };
//   counter++;
// }



//todo-3) 1 - 100 чейинки сандардын жуп(четный) сандарынын суммасын чыгаруу.

// let counter = 0; 
// let sum = 0;
// while(counter <= 100){
//   if (counter % 2 === 0){
//     console.log(counter);}
//   sum = sum + counter
//  counter++;
// }
// console.log(sum);


//todo-4) "Naruto Shipuden"  деген string дин ичинде char "u" барбы же жокбу текшеруу.

let userName = "Naruto Shipuden"
console.log(userName.length);
for (let index = userName.length - 1; index >= 0; index--) {
  const char = userName.charAt(index);
  if(char === "u"){
   console.log('буква есть ${char}');
  }else{
   console.log('no char');
  }
 }


//   let userName = "Naruto Shipuden"
//  let index = 0; 
// while(index < userName.length) {
//   let char = userName.charAt(index);
//      if(char === "u"){
//       console.log('буква есть ${char}');
//      }
//      index++;
//     }

//todo-5) Берилген string значениени reverse кылыш керек.

// let  str = 'hello'
// let res = ''
// for (let i = str.length-1; i >= 0; i--) {
//   res += str[i]
// }
// console.log(res)



// let  str = 'hello'
// let res = ''
// let i = str.length-1;
// while(i >= 0){
//   res += str[i]
//   i--;
// }console.log(res);


//todo-6)  Nested loop менен биринчи суроттогудой результат чыгыш керек консольго









//todo-7) Томондогу  задачаны (2-картинка)  эки вариант менен аткарыш керек 1) for цикл менен 2) while цикл менен

//   let widht = 14;
//   let height = 6;
// for (let i = 0; i < height;i++){
//   if (i === 0 || i === height - 1) {
//     console.log("*".repeat(widht));
//   }else{
//     console.log("*" + "-".repeat(widht-2) + "*");
//     console.log("\n");
//   }
// }

       

// let lines = 7;
// let  str = " ";
// let star = "*";
// for (let i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }



// let lines = 7;
// let  str = " ";
// let star = "*";
// let i = 0;
// while(i< lines){
//   str += star;
//   console.log(str);
//   i++;
// }