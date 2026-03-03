## BUILD ##
FROM node:22-alpine AS builder

WORKDIR /usr/src/app
COPY package.json ./

RUN apk add git
RUN yarn install

COPY . .

RUN yarn build

## DEPLOY ##
FROM node:22-alpine

WORKDIR /usr/src/app
COPY package.json ./

RUN apk add git
RUN yarn install

COPY . .

COPY --from=builder /usr/src/app/.svelte-kit/output ./

CMD ["yarn", "start"]
