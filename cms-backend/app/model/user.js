//const mongoose = require("../../loaders/mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
//const config =require("../config/index")


const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.methods.generateAuthToken = async function (){
    const user = this;
    const token = jwt.sign({
        id:user._id.toString()
    }, "SECRET" );
    console.log('token',token);
    user.token = token;
    const updateUser = await user.save();
    return updateUser;

}

userSchema.statics.findByCredentials = async function (email, password) {
  // Find the user by email
  const user = await this.findOne({ email });

  // If the user doesn't exist, throw an error
  if (!user) {
    throw new Error("User not found");
  }

  // Compare the password with the hashed password in the database
  const isCorrectPassword = await bcrypt.compare(password, user.password);

  // If the password doesn't match, throw an error
  if (!isCorrectPassword) {
    throw new Error("Invalid credentials");
  }

  // Return the user if credentials are correct
  return user;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
