const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://<username>:<password>@cluster0.mlrioal.mongodb.net/<dbname>?appName=Cluster0";

let dbUrl = uri;
dbUrl = dbUrl.replace("<username>", process.env.DB_USERNAME);
dbUrl = dbUrl.replace("<password>", process.env.DB_PASSWORD);
dbUrl = dbUrl.replace("<dbname>", process.env.DB_NAME);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });

//     const database = client.db(process.env.DB_NAME)
//     const products = database.collection("products");
//     const orders = database.collection("orders");
//     const users = database.collection("users");

//     await products.insertOne({
//         "name": "Product 1",
//         "price": 10,
//     })
//     // pr.catch({
//     //     console.log("not created");
//     // })

//     orders.insertOne({
//         "name": "Order 1",
//         "products": [
//             {
//                 "name": "Product 1",
//                 "price": 10,
//                 }
//                 ]
//     })

//     users.insertOne({
//         "name": "User 1",
//         })

//     console.log("Pinged your deployment. You successfully connected to MongoDB!"  , );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const database = client.db(process.env.DB_NAME);
const products = database.collection("products");

module.exports = {
  database,
  products,
};
