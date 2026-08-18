import { PrismaClient, UserRole } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function initOwner() {
  try {
    const uid = process.env.OWNER_UID! || "a";
    const password = process.env.OWNER_PASSWORD! || "1";

    const exists = await prisma.user.findUnique({
      where: {
        uid,
      },
    });

    if (exists) {
      console.log("Owner already exists");
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        uid,

        roles: [UserRole.CUSTOMER, UserRole.OWNER],

        accounts: {
          create: {
            provider: "LOCAL",
            providerAccountId: uid,
            passwordHash: hash,
          },
        },

        profile: {
          create: {
            name: "Owner",
          },
        },
      },
    });

    console.log("Owner created");
  } finally {
    prisma.$disconnect();
  }
}
