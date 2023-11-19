## BUILD ##
FROM node:18.18-alpine AS builder

WORKDIR /usr/src/app
COPY package.json ./

RUN apk add git
RUN yarn install

COPY . .

RUN yarn build

## DEPLOY ##
FROM node:18.18-alpine

WORKDIR /usr/src/app
COPY package.json ./

RUN apk add git
RUN yarn install

COPY . .

COPY --from=builder /usr/src/app/.svelte-kit/output ./

CMD ["yarn", "start"]
