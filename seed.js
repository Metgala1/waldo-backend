const prisma = require('./src/client');
const images = [
  {
    id: '1',
    title: 'Rick and Morty Adventure',
    imageUrl: 'https://knmqywtjbynvxthbyoub.supabase.co/storage/v1/object/public/files/3a1f8ad3-9f9a-41a8-93f6-18d5c2aaf2ee-rick&m.png',
    width: 800,
    height: 600,
    characters: [
      { id: '1', name: 'Rick Sanchez', x: 54, y: 39.5 },
      { id: '2', name: 'Morty Smith', x: 32, y: 45.6 },
      { id: '3', name: 'Summer Smith', x: 68, y: 80 },
      { id: '4', name: 'Beth Smith', x: 78, y: 39 },
      { id: '5', name: 'Jerry Smith', x: 60, y: 25 },
      { id: '6', name: 'Mr. Poopybutthole', x: 64, y: 48 },
      { id: '7', name: 'Baby Wizard', x: 26, y: 54 }
    ]
  }
];

async function main() {
  for (const img of images) {
    const image = await prisma.image.create({
      data: {
        id: img.id,
        title: img.title,
        imageUrl: img.imageUrl,
        width: img.width,
        height: img.height,
      }
    });

    for (const char of img.characters) {
      await prisma.character.create({
        data: {
          id: char.id,
          name: char.name,
          x: char.x,
          y: char.y,
          radius: 5.0,
          imageId: image.id,
        }
      });
    }
  }
  console.log('Seeding completed');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

