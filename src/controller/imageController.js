const prisma = require("../client")

exports.getImage = async (req, res) => {
  try {
    const image = await prisma.image.findFirst({
      include: {
        Character: {
          select: {
            id: true,
            name: true,
            x: true,
            y: true,
            radius: true,
          },
        },
      },
    });

    if (!image) {
      return res.status(404).json({ error: "No image found" });
    }

    console.log("Image + characters fetched");

    res.status(200).json({
      image,
      message: "Image fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch image" });
  }
};
