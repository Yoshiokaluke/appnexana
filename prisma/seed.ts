import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const systemAdmin = await prisma.user.upsert({
      where: {
        email: 'daiki.yoshioka@nexanahq.com',
      },
      update: {
        systemRole: 'system_team',
      },
      create: {
        email: 'daiki.yoshioka@nexanahq.com',
        clerkId: 'user_2wCBETc5XIIgyIXWsOqVu3cUyvu',
        systemRole: 'system_team',
      },
    });

    console.log({ systemAdmin });
  } catch (error) {
    console.error('Error in seed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 