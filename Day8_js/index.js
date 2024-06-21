// console.log("Hello....");

const pr = fetch("https://dummyjson.com/products");
pr.then((res) => {
  return res.json();
}).then((data) => {
  console.log(data);
  createUI(data);
}).catch((err) => {
  console.log("Error occurred! ", err);
});

const main = document.getElementById("root");

function createUI(data) {
  const products = data.products;
  main.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    const newCard = document.createElement("div");
    newCard.innerHTML= `
    <div>
      <h3>${products[i].title}</h3>
      <img src="${products[i].thumbnail}" alt="${products[i].title}">
      <p>${products[i].description}</p>
      <p>$${products[i].price}</p>
    </div>
    `;
    main.appendChild(newCard);
  }
}

function searchProducts() {
  const searchText = document.getElementById('search-input').value;
  const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
  pr.then((res) => {
    return res.json();
  }).then((data) => {
    createUI(data);
  }).catch((err) => {
    console.log("Error occurred! ", err);
  });
}

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchProducts();
  }
});


// console.log("st");
// const pr = new Promise((res, rej) => {
//   let flag = true;
//   if (flag) {
//     setTimeout(() => {
//       res(["Apple", "Banana", "Cake"]);
//     }, 4000);
//   } else {
//     rej("error");
//   }
// });
// console.log("Mid");
// // console.log(pr);
// // console.log(pr);

// setTimeout(() => {
//   console.log("Done");
// }, 4000);

// pr.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// console.log("End");

// let cnt = 0;
// let id;
// const cb = () =>{
//   cnt++;
//   console.log("Done", cnt);
//   if(cnt == 5){
//     clearInterval(id);
//     }
// }
// let time = 1000;

// id = setInterval(cb, time);
