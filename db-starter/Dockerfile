FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm install -g typescript ts-node

CMD ["ts-node", "src/init-db.ts"]
