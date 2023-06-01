const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDb=require('./config/db')


// create Express app
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDb()
// set up error handling middleware
app.use("/", require("./routes/userRouts")  )
app.use("/room", require("./routes/roomRouts"))




app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  
  
  const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));