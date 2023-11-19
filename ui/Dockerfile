## BUILD ##
FROM node:18.18-alpine AS builder

WORKDIR /usr/src/app
COPY package.json ./

RUN apk add git
RUN yarn install

COPY . .

RUN yarn build
RUN echo $(ls /usr/src/app)

## DEPLOY ##
FROM node:18.18-alpine

WORKDIR /usr/src/app
COPY package.json ./

RUN apk add git
RUN yarn install

COPY . .

RUN echo $(ls -a /usr/src/app)
COPY --from=builder /usr/src/app/.svelte-kit/output ./

CMD ["yarn", "start"]
