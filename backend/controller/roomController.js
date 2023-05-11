const room=require('../model/roomModel')
// get request
const getRoom = async(req, res)=>{
    try{
        const text = await room.find()
    res.json(text)
    }catch(err){
        res.status(500).send("Api Failed To fetch");
    }
}
    // post request

    const postRoom = async(req, res)=>{
        let myroom = new room(req.body)
         await myroom.save()
        .then((user) => {
            res.status(200).send(user);
          })
          .catch((err) => {
            res.status(500).send(err.message);
          });
    }
const getRoombyId=async(req,res)=>{
    try {
        const roombyid = req.params.id;
        const result = await room.findById(roombyid);
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
}


   // Delete room data

const deleteRoom = async(req, res)=>{
    try {
        const roomId = req.params.id;
        const result = await room.findByIdAndDelete(roomId);
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
    //Update room
    const updateRoom=async(req,res)=>{
        try {
            const roomId = req.params.id;
            const updatedRoom = req.body;
            const result = await room.findByIdAndUpdate(
              roomId,
              updatedRoom,
              {
                new: true,
                runValidators: true,
              }
            );
            res.status(200).send(result);
          } catch (error) {
            res.status(500).send(error.message);
          }
    }
    module.exports = {
        getRoom,
        postRoom,
        deleteRoom,
        getRoombyId,
        updateRoom
      };
      