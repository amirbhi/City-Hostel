
const express = require("express")
const {getRoom, postRoom,deleteRoom,getRoombyId,updateRoom} = require("../controller/roomController")
const router = express.Router()

router.get("/", getRoom)
router.get("/:id", getRoombyId)
router.post("/", postRoom)
router.delete("/:id", deleteRoom)
router.put("/:id", updateRoom)




module.exports = router