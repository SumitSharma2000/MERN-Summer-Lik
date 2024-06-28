const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const fs = require("fs/promises");

const getData = async () => {
  try {
    const data = await fs.readFile("./data.json", { encoding: "utf-8" });
    const products = JSON.parse(data);
    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
};

app.get("/products", async (req, res) => {
  //   const data = await fs.readFile("./data.json", { encoding: "utf-8" });
  let products = await getData();
  res.json({
    status: "Success...",
    message: "Welcome to my API",
    data: {
      products: products,
    },
  });
  // res.send('Welcome to my API')
});

app.post("/products", async (req, res) => {
  // console.log(typeof req)
  // console.log(Object.keys(req))
  // console.log(body)
  const body = req.body;
  // const text = await fs.readFile("./data.json",{encoding: "utf-8"})
  const products = await getData();
  //   console.log(products);
  // let products;
  // try{
  //     products = JSON.parse(text);
  // }catch{
  //     products = [];
  // }

  //   const prlen = products.length;
  //   const lastIndex = prlen - 1;
  //   const lastItem = products[lastIndex];
  //   const lastId = lastItem.id;

  let lastId = 0;
  if (products.length != 0) {
    lastId = products[products.length - 1].id;
  }
  body.id = lastId + 1;
  products.push(body);
  await fs.writeFile("./data.json", JSON.stringify(products));
  res.status(201);
  res.json({
    status: "Pending...",
    body: {
      products: body,
    },
  });
});



// implement patch method for giving the id to data

app.listen(port);
