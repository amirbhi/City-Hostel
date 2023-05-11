const user = require("../model/userModel");

const getUser = async(req, res)=>{
    const text = await user.find()
    res.json(text)}


// post 
const postUser = async(req, res)=>{
//     if(!req.body.user){
//         res.status(400).json({
//             messeage: "please add a text field"
//         })
// }

   let userMy = new user(req.body)
   let result = await userMy.save()
   res.send(result);
    }

    //Upadte
    


module.exports = {
  getUser,
  postUser
};
