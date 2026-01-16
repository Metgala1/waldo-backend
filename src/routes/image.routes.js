const { Router } = require("express");
const imageRouter = Router();
const imageController = require("../controller/imageController");
const { image } = require("../client");


 /*imageRouter.get("/image/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const image = await prisma.image.findUnique({
      where: { id },
      include: {
        Character: {
          select: {
            id: true,
            name: true,
            x: true,
            y: true,
            radius: true
          }
        }
      } 
    });

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.status(200).json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch image" });
  }
});*/
imageRouter.get("/images", imageController.getImage); 

module.exports = imageRouter;
