FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json ./
RUN npm install
COPY . /opt/app
EXPOSE 8082
CMD [ "node", "src/app.js"]