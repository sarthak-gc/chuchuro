import { PrismaClient } from "../../generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

export default prisma;
