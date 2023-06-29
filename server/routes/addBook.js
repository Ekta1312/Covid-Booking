const express=require("express")
const bookcontroller=require("../controller/bookcontroller")

const router =express.Router()

router.post("/",bookcontroller.create)
router.delete("/:id",bookcontroller.delete)
router.get("/",bookcontroller.read)

module.exports=router