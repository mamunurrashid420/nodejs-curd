import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a User and a Student
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'securepassword', // Make sure to hash passwords in production!
      image: 'profile.jpg',
      students: {
        create: {
          name: 'John Student',
          roll_no: 12345,
          class: '10th',
          fees: 5000,
          medium: 'English',
        },
      },
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
