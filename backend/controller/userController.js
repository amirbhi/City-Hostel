const User = require("../model/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// ...

const registerUser = async (req, res) => {
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email || password || first_name || last_name)) {
      return res.status(400).send("All input is required for signup");
    }

    // Check if user already exists
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }

    // Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const newUser = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: newUser._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // Save user token
    newUser.token = token;
    await newUser.save();

    // Return new user
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error for signup");
  }
};

const loginUser = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required for login");
    }

    // Validate if user exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: existingUser._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // Save user token
      existingUser.token = token;
      await existingUser.save();

      // Return authenticated user
      res.status(200).json(existingUser);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error for login");
  }
};


module.exports = {
  loginUser,
  registerUser,
};
