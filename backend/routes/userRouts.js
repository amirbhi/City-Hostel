const express = require("express")
const { registerUser,loginUser} = require("../controller/userController")
const router = express.Router()

// router.get("/",getUser)
router.post('/registerUser', registerUser);
router.post("/login", loginUser)

// router.put("/:id",updateUser)
// router.delete("/:id",deleteUser)


module.exports = router