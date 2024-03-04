const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const ejs = require("ejs");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");

const app = express();

dotEnv.config();

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5000" }));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "This is a secret",
    resave: false,
    saveUninitialized: true,
    // store: store
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Succesfully!");
  })
  .catch((error) => {
    console.log(`${error}`);
  });

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySession",
});

app.get("/signup", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/dashboard", (req, res) => {
  res.render("welcome");
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// MongoDB Schema
const Form = mongoose.model("Form", {
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  designation: String,
  phone: String,
  dob: String,
  comments: String,
  dataType: String,
  createdAt: Date,
});

// Routes
app.post("/addForm", (req, res) => {
  const form = new Form(req.body);
  form
    .save()
    .then(() =>
      res.status(200).json({ message: "Form submitted successfully" })
    )
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.get("/forms", async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/forms/:id", async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    gender,
    designation,
    phone,
    dob,
    comments,
  } = req.body;

  try {
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { firstName, lastName, email, gender, designation, phone, dob, comments },
      { new: true } // To return the updated document
    );

    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.json(updatedForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;
//   try{
//     const newUser = new User({
//       username,
//       email,
//       password
//     })
//     await newUser.save()
//     res.redirect('/login')

//   }catch(err){
//     console.log(err)
//     res.redirect('/signup')
//   }

// })

app.listen(PORT, () => {
  console.log(`Serer started and Running @ ${PORT}`);
});
