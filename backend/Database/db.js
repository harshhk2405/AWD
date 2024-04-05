require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://amitgangani2814:ag164755@cluster0.w200lwk.mongodb.net/adminss';

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, })
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;
