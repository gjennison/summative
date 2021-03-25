const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const conn = require("./connection");

// One model per collection
const products = require("./models/product-model");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// connection code
mongoose.connect(conn.atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// feedback to let us know we succeeded
mongoose.connection.on("connected", (err, res) => {
  console.log("Success! Connected to MongoDB");
});

// in case we fail
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB ", err);
});

// end connection code

// base
app.get("/", function (req, res) {
  res.send("<h1>Products</h1>");
});

// api routes
// create new routes using api - good RESTful practice
const router = express.Router();
app.use("/api", router);

// get all
router.get("/products", (req, res) => {
  products.find().then(
    (productsArray) => {
      res.json(productsArray);
    },
    () => {
      res.json({ result: false });
    }
  );
});

// find and return a single user based upon id - not _id
router.get("/products/:id", (req, res) => {
  products.findOne({ id: req.params.id }).then(
    (productsArray) => {
      res.json(productsArray);
    },
    () => {
      res.json({ result: false });
    }
  );
});

// catch bad endpoints on the api route only
router.get("/*", (req, res) => {
  return res.json({ result: "not a valid endpoint" });
});

router.delete("/products/:id", (req, res) => {
  console.table(req.params);
  products.deleteOne({ id: req.params.id }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/products", (req, res) => {
  // create instance product model
  var newproduct = new products();
  var reactForm = req.body;

  console.log(req.body);

  console.log(newproduct);
  // copy form data into instance. nice.
  Object.assign(newproduct, reactForm);
  // for debug only
  console.log(">>> ", reactForm);

  console.log(newproduct);

  newproduct.save().then(
    (result) => {
      return res.json(result);
    },
    () => {
      return res.send("problem adding new product");
    }
  );
});

router.put("/products/:id", (req, res) => {
  products.findOne({ id: req.params.id }, function (err, objFromMongoDB) {
    if (err)
      return res.json({
        result: false,
      });

    var data = req.body;

    if (objFromMongoDB === null) {
      return res.json({
        result: false,
      });
    }

    Object.assign(objFromMongoDB, data);

    objFromMongoDB.save().then(
      (response) => {
        res.json({
          result: response,
        });
      },

      (error) => {
        res.json({
          result: false,
        });
      }
    );
  });
});

let PORT = 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
