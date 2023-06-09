# Next.js Project Starter
Next.js starter w/ Tailwind CSS + Prisma ORM + Railway + Google Authentication

**Next.js Installation:**
```
npx create-next-app@latest --experimental-app
```

**To Run Application:**
```
npm run dev
```

**Install [Prisma ORM](https://www.prisma.io):**
```
npm install prisma typescript ts-node @types/node --save-dev
```

**Initialize Prisma:**
```
npx prisma init
```

**Install Prisma Client:**
```
npm install @prisma/client
```

**Create New PostgreSQL project in [Railway](https://railway.app) and add connection string to .env file:**
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

**Install NextAuth.js:**
```
npm install next-auth
npm install @next-auth/prisma-adapter
```

**Create a new OAuth key in [Google Cloud Console](https://console.cloud.google.com) under APIs & Services > Credentials > Create OAuth client ID and copy the client ID and client secret to .env.local file. Put whatever value you want for the AUTH_SECRET:**
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
AUTH_SECRET=
```

**For 'Authorized JavaScript origins' and 'Authorized redirect URIs' put the following values:**
```
http://localhost:3000
http://localhost:3000/api/auth/callback/google
```

**Create Database Schema with Prisma Migrate:**
```
npx prisma migrate dev
npx prisma generate
```

**Returned Google content:**
```
  user: {
    name: 'Tomonari Feehan',
    email: 'feehan.tomonari@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/AGNmyxZDtE8MbubKJ7mHqguMwnQ7S7rM69Dir_88eLOz=s96-c'
  }
```
