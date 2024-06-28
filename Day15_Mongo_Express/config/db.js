// const { MongoClient } = require("mongodb");
// const uri =
//   "mongodb+srv://<username>:<password>@cluster0.mlrioal.mongodb.net/<dbname>?appName=Cluster0";

// let dburl = uri.replace("<username>", process.env.DB_USERNAME);
// dburl = dburl.replace("<password>", process.env.DB_PASSWORD);
// dburl = dburl.replace("<dbname>", process.env.DB_DATABASE);

// const client = new MongoClient(dburl);

// const database = client.db("LPU-DAY-15")
// const productCollection = database.collection("products");

// module.exports={
//     productCollection,
// }

// yaha se mongoose ka code hai
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://<username>:<password>@cluster0.mlrioal.mongodb.net/<dbname>?appName=Cluster0";

let dburl = uri.replace("<username>", process.env.DB_USERNAME);
dburl = dburl.replace("<password>", process.env.DB_PASSWORD);
dburl = dburl.replace("<dbname>", process.env.DB_DATABASE);

mongoose
  .connect(dburl)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("DB connection failed");
    console.log(err);
  });
