const http = require("http");
const fsPromises = require("fs").promises;
const fs = require("fs");
const url = require("url");

const dataText = fs.readFileSync("./data.json");
const data = JSON.parse(dataText);

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const { query, pathname } = url.parse(req.url, true);
  switch (pathname) {
    case "/": {
      const stream = await fsPromises.readFile("./pages/homepage.html");
      res.end(stream);
      break;
    }
    case "/products": {
      const stream = await fsPromises.readFile("./pages/products.html");
      let text = stream.toString();
      let productsText = "";
      for (let i = 0; i < data.length; i++) {
        productsText += `<div class="product-card">
          <h3>${data[i].title}</h3>
          <img src="${data[i].thumbnail}" alt='product-image' height='200'>
          <p>${data[i].description}</p>
          <a href="/view?id=${data[i].id}" target="_blank">More</a>
        </div>`;
      }
      text = text.replace("$PRODUCTS$", productsText);
      res.end(text);
      break;
    }
    case "/view": {
      const product = data.find((ele) => ele.id == query.id);
      const bf = await fsPromises.readFile("./pages/view.html");
      let text = bf.toString();
      text = text.replace(
        "$TITLE$",
        `<div>
          <h2>${product.title}</h2>
          <img src="${product.thumbnail}" height="300">
          <h4>${product.price}</h4>
          <p>${product.description}</p>
        </div>`
      );
      res.end(text);
      break;
    }
    default: {
      res.end("<h2>Oops! page not found.....</h2>");
    }
  }
});

app.listen(1400, () => {
  console.log("server is running on port 1400");
});

// -------------------------// Status code-----------------------------------
// Internation - 1XX
// Success - 2XX
// Redirection - 3XX
// Client Side error - 4XX
// server side error - 5XX
