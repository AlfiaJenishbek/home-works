
//  zadacha-1
// const array = document.getElementById("main-heading");
// array.style.color = "blue";
// array.style.fontSize = "x-larger";
// array.style.fontFamily =
//   "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
// array.style.fontWeight = "200";

//  zadacha-2

// const array1 = document.getElementById("main-heading");
// array1.textContent = "Popular products";
// const nameAside = document.getElementsByTagName("aside");
// nameAside[0].remove();
// console.log(nameAside);

//  zadacha - 3;
// const nameClass = document.getElementsByClassName("section")[0];
// const nameClass1 = document.getElementsByClassName("heading");
// nameClass.firstElementChild.classList.remove("heading");







// console.log(nameClass);// const array = [
//   {
//     icon: "https://help.x.com/content/dam/help-twitter/brand/logo.png",
//     title: "Twitter",
//     description: "«Тви́ттер» (англ. Twitter), в процессе ребрендинга в X, — американская социальная сеть. Это пятый по посещаемости сайт в мире и одна из крупнейших социальных сетей с 550 млн пользователей ежемесячно.",
//     link: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%B8%D1%82%D1%82%D0%B5%D1%80",
//   },

//   {
//     icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/800px-Telegram_Messenger.png",
//     title: "Telegram",
//     description: "Telegram also has social networking features, allowing users to post stories, create large public groups with up to 200,000 members, or share one-way updates to unlimited audiences in so-called channels.[",
//     link: "https://t.me/alfiajenishbek",
//   },
// ];
// const container = document.getElementById("list");
// container.className = "roditel";
// array.forEach((Element) => {
//   const listItem = document.createElement("li");
//   listItem.className = "list-item";

//   const image = document.createElement("img");
//   image.src = Element.icon;
//   image.className = "img";

//   const h1 = document.createElement("h1");
//   h1.textContent = Element.title;

//   const p = document.createElement("p");
//   p.textContent = Element.description;
//   p.className = "p";

//   const button = document.createElement("button");
//   button.className = "button";

//   const linkA = document.createElement("a");
//   linkA.textContent = "READ MORE";
//   linkA.className = "a";
//   linkA.href = Element.link;
//   button.append(linkA);
//   listItem.append(image, h1, p, button);
//   container.append(listItem);
// });
