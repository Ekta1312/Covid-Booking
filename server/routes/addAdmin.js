const express = require("express")
const admincontroller=require("../controller/admincontroller")

const router =express.Router()

router.post("/verify",admincontroller.verify)
router.get("/",admincontroller.read)
router.post("/",admincontroller.create)

router.delete("/:id",admincontroller.delete)

module.exports=router;