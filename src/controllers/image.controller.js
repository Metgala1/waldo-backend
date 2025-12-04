const prisma = require("../prisma/client");

async function getImages(req, res) {
  const images = await prisma.image.findMany();
  return res.json(images);
}

module.exports = { getImages };
