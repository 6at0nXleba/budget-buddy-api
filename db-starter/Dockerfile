# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

EXPOSE 3000

CMD ["npx", "ts-node", "src/init-db.ts"]
