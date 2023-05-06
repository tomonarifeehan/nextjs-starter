**Next.js Installation:**
```
npx create-next-app@latest --experimental-app
```

**To Run Application:**
```
npm run dev
```

**Install Prisma ORM:**
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

**Create New PostgreSQL project in [Railway](https://railway.app) and add connection string to .env file.**
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

**Install NextAuth.js:**
```
npm install next-auth
```

**Create a new OAuth key in [Google Cloud Console](https://console.cloud.google.com) under APIs & Services > Credentials and copy the client ID and secret to .env.local file. Put whatever value you want for the AUTH_SECRET.**
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
AUTH_SECRET=
```

