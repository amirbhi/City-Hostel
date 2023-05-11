const mongoose = require('mongoose');
// const {Schema}=mongoose
const userDetailSchema = new mongoose.Schema({
    // For User Schema
    firstName: {
        type: String,
        required: [true, "please add a firstName "],
        trim: true
      },
      lastName: {
        type: String,
        required: [true, "please add a lastName "],
        trim: true
      },
      email: {
        type: String,
        required: [true, "please add a Email filed"],
        unique: true,
        trim: true
      },
      password: {
        type: String,
        required:[true, "please add a Password filed"],
        trim: true
      },
    // text: {
    //     type : String,
    //     required: [true, "please add a text filed"]
    // },
    // email: {
    //     type: String,
    //     required: [true, "please add a text filed"],
    //     unique: true
    // }
    });
    
// const UserDetail = mongoose.model('userdetail', userDetailSchema);
module.exports = mongoose.model('userdetail', userDetailSchema)

