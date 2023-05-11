const mongoose = require('mongoose');
// const {Schema}=mongoose



    //   for Rooms details
    const roomsdetailSchema = new mongoose.Schema({
    roomNo: {
        type: Number,
        required: true,
        trim: true
      },
      title: {
        type: String,
        required: true,
        trim: true
      },
      floorNo: {
        type: Number,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      rating: {
        type: Number,
        required: true,
        trim: true
      },
      price: {
        type: Number,
        required: true,
        trim: true
      },
      roomCapacity: {
        type: Number,
        required: true,
        trim: true
      },
      img: {
        type: String,
        
       
      }

})

// const RoomsDetail = mongoose.model('roomsdetail', roomsdetailSchema);
module.exports = mongoose.model('roomdetail', roomsdetailSchema)

// const UserDetail = mongoose.model('userdetail', userDetailSchema);