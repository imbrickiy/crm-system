// import { PrismaClient } from '@prisma/client';

// const globalWithPrisma = global as typeof globalThis & { prisma: PrismaClient };

// if (process.env.NODE_ENV !== 'production' && !globalWithPrisma.prisma) {
//   globalWithPrisma.prisma = new PrismaClient();
// }

// const prisma = process.env.NODE_ENV === 'production' ? new PrismaClient() : globalWithPrisma.prisma;

// export default prisma;
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma