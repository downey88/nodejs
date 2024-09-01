FROM node:20-alpine

WORKDIR /nodejs
COPY package.json /nodejs
RUN npm install
COPY . /nodejs

CMD node app

EXPOSE 80