установил NEXT.JS
    npx create-next-app@latest

shadcn
    npx shadcn@latest init

prisma
    (https://www.sammeechward.com/prisma-and-nextjs)


    npm i prisma typescript ts-node @types/node --dev
    npx prisma init

    npm i dotenv-cli --dev

edit  .env file
update file schema.prisma

npm run migrate:dev --name init
npx prisma generate
npm i @prisma/client


add Prisma Client to Next.js App
add file client.ts to api folder

add prisma/client in folder lib

