// const button  = document.getElementsByTagName('button')[0]
// button.addEventListener('click' , cb)

// const cb = () =>{
//   console.log("Button Clicked");
// }
async function serachProduct(){
  const data = document.getElementById("searchInput").value;
  const res = document.getElementById("result");
  res.innerHTML = '';

  if(!data){
    res.innerHTML = '<P>Please enter the product name</P>'
  }
}







const rt = document.getElementById("rt");
const req = fetch("https://dummyjson.com/products");

req
  .then((res) => {
    const convtData = res.json();
    convtData.then(renderUI);
  })
  .catch((error) => {
    console.log(error);
  });

const renderUI = (data) => {
  const products = data.products;
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <h3>${products[i].title}</h3>
    <h3>${products[i].id}</h3>
    <h3>${products[i].category}</h3>
    <h3>${products[i].description}</h3>
    <h3>${products[i].price}</h3>
    <h3>${products[i].brand}</h3>
    <h3>${products[i].availabilityStatus}</h3>
    <h3>${products[i].dimensions}</h3>
    <h3>${products[i].discountPercentage}</h3>
    <img>${products[i].images}</img>
     `;
    rt.appendChild(card);
  }
};
