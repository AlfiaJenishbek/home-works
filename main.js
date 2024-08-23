tasc1

function createStudent  () {
  const users = {
    firstName:"Nooruz",
    lastName:"Abdykalykov",
    age:24,
    education:{
      university:"ALATOO",
      faculty:"CS",
      gpa:87,
    },

  };
  return users;
 };
 const res = createStudent();
 console.log(res);

tasc2

const object = {
  name1: "Alfia",
};
function deleteKey(obj, name) {
  if ("deletekey" in object) {
    console.log(`${obj},есть токой ключ`);
  } else {
    console.log(`${name},нет токой ключ`);
  }
  return object.name1;
}
delete object.name1;

deleteKey(object, "name");

tasc3

let user ={
  name: "maria",
  age: 29,
email: "maria@gmail.com",
password:"123456789"
};
const sum = 5;
const users = prompt("Ведите ваше email")
if(users !== user.email){
  alert("нет такой email");
}else if(users === user.email){
  const password = prompt("Пароль");
  if (password === user.password){
    alert("Туура");
const user1 = prompt("2+3=?");
if(parseInt (user1) === sum){
  user.sum = 5;
  alert(`получил = ${user.sum}`);
} else{
  alert("не получил")
}
}else{
  alert("Пароль не правильный");
}
}


