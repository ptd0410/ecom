import { UserRole, AuthProvider } from "@prisma/client";

import * as bcrypt from "bcrypt";
import { prisma } from "./db";

// ============================================================
// INIT OWNER
// ============================================================

async function initOwner() {
  const uid = "owner";

  const password = "owner123";

  const exists = await prisma.user.findUnique({
    where: {
      uid,
    },
  });

  if (exists) {
    console.log("Owner already exists");
    return exists;
  }

  const hash = await bcrypt.hash(password, 10);

  const owner = await prisma.user.create({
    data: {
      uid,

      roles: [UserRole.CUSTOMER, UserRole.OWNER],

      accounts: {
        create: {
          provider: AuthProvider.LOCAL,
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

  return owner;
}

// ============================================================
// ADMIN MOCK
// OWNER CREATE ADMIN
// ============================================================

async function createAdmin(ownerId: number) {
  const uid = "admin";

  const exists = await prisma.user.findUnique({
    where: {
      uid,
    },
  });

  if (exists) {
    return exists;
  }

  const hash = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.create({
    data: {
      uid,

      roles: [UserRole.CUSTOMER, UserRole.ADMIN],

      accounts: {
        create: {
          provider: AuthProvider.LOCAL,
          providerAccountId: uid,
          passwordHash: hash,
        },
      },

      profile: {
        create: {
          name: "Admin Mock",
        },
      },
    },
  });

  console.log("Admin created by owner:", ownerId);

  return admin;
}

// ============================================================
// ADMIN CREATE CATEGORY
// ============================================================

async function createCategories(adminId: number) {
  const names = ["Điện thoại", "Laptop", "Tai nghe", "Đồng hồ", "Phụ kiện"];

  const categories = await Promise.all(
    names.map((name) =>
      prisma.category.create({
        data: {
          name,

          description: `${name} chất lượng cao`,
        },
      }),
    ),
  );

  console.log("Categories created by admin:", adminId);

  return categories;
}

// ============================================================
// REGISTER SELLER MOCK
// ============================================================

async function createSeller() {
  const uid = "seller";

  const exists = await prisma.user.findUnique({
    where: {
      uid,
    },
  });

  if (exists) {
    return exists;
  }

  const hash = await bcrypt.hash("seller123", 10);

  const seller = await prisma.user.create({
    data: {
      uid,

      roles: [UserRole.CUSTOMER, UserRole.SELLER],

      accounts: {
        create: {
          provider: AuthProvider.LOCAL,
          providerAccountId: uid,
          passwordHash: hash,
        },
      },

      profile: {
        create: {
          name: "Seller Mock",
        },
      },
    },
  });

  console.log("Seller registered");

  return seller;
}

// ============================================================
// SELLER CREATE PRODUCTS
// ============================================================

async function createProducts(sellerId: number, categories: any[]) {
  const products = Array.from(
    {
      length: 100,
    },

    (_, i) => {
      const category = categories[i % categories.length];

      return {
        name: `Product ${i + 1}`,

        description: `Demo product ${i + 1}`,

        price: Number((Math.random() * 45000000 + 500000).toFixed(0)),

        stock: Math.floor(Math.random() * 100),

        image: `https://picsum.photos/seed/product-${i + 1}/600/600`,

        categoryId: category.id,

        sellerId,
      };
    },
  );

  await prisma.product.createMany({
    data: products,
  });

  console.log("Products created by seller:", sellerId);
}

// ============================================================
// MAIN FLOW
// ============================================================

async function main() {
  // 1. hệ thống có owner

  const owner = await initOwner();

  // 2. owner tạo admin

  const admin = await createAdmin(owner.id);

  // 3. admin tạo category

  const categories = await createCategories(admin.id);

  // 4. user đăng ký seller

  const seller = await createSeller();

  // 5. seller tạo product

  await createProducts(seller.id, categories);

  console.log("Seed completed");
}

main()
  .catch(console.error)

  .finally(async () => {
    await prisma.$disconnect();
  });
