FROM node:14

# RUN apk update && apk add --update git openssh python g++ make
RUN apt-get update && apt-get install build-essential

RUN mkdir -p /app/node_modules
COPY package.json /app

# app infra repo
WORKDIR /app
RUN npm install --no-optional
COPY . ./
RUN npm run build

EXPOSE 8080
CMD PORT=8080 npm start
