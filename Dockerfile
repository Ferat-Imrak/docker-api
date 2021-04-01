FROM node:12.16.2-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . . 
CMD node index.js 