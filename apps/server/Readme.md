npx prisma migrate reset
npx prisma db push --force-reset
npx prisma generate
npx prisma migrate reset
npx prisma migrate dev --name [name]
npx prisma format
npx prisma migrate status
npx prisma migrate dev --name init

<!--  -->

DROP DATABASE your_database;
CREATE DATABASE your_database;
