const { Router } = require("express");
const imageRouter = Router();
const imageController = require("../controller/imageController");
const { image } = require("../client");


 
imageRouter.get("/images", imageController.getImage); 

module.exports = imageRouter;
