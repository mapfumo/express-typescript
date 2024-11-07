# Express.JS with TypeScript - [Setup, Examples, Testing]

##

### Setup

```bash
npm install -D typescript
npm install -D @types/express # type inference
npm install -D nodemon
npm install -D ts-node
npm i -D @types/express-session
npx tsc --init # for tsconfig.json and add `"rootDir": "./src"`in tsconfig.json and`"outDir": "./dist"`
npx tsc --build
node dist/index.js
```

- add `"build": "tsc --build"` to package.json

### Miscelenous

- set `"noImplicitAny": true,` to enforce type annotations
- dto (Data Transfer Object) is a type of object that is used to transfer data between the client and the server.

### Testing with Ts-jest

```bash
npm i -D jest
npm i -D ts-jest @types/jest
npx ts-jest config:init
npm test
```

### Integration Testing

```bash
npm i -D supertest
# install types
npm i -D @types/supertest
npm run test:e2e
```
