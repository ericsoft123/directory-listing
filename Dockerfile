  
FROM node:latest

WORKDIR /usr/src/app

# Means copy package.json and package-lock.json
COPY package*.json /usr/src/app/
RUN npm install
COPY . .

# replace this with your application's default port
EXPOSE 8000

CMD [ "node", "app.js" ]
