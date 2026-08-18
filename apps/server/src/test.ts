import { prisma } from "./db";

async function main() {}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
