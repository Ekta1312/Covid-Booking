const express=require("express")
const centercontroller=require("../controller/centercontroller")

const router =express.Router()

router.post("/",centercontroller.create)
router.delete("/:id",centercontroller.delete)
router.get("/",centercontroller.read)

module.exports=router;