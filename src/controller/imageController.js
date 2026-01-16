const prisma = require("../client")

exports.getImage = async(req, res) => {
    try{
        const image = await prisma.image.findMany();
        res.json({image, message: "Image fetched successfully" });

    }catch(err){
        res.status(500).json({ error: "Failed to fetch images" });
    }
}