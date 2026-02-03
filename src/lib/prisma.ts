// src/lib/prisma.ts
// Singleton pattern prevents opening 100 connections during hot-reload in dev.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]   // verbose in dev
        : ["error"],                   // errors only in prod
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}