# start from an existing image
FROM node:alpine
# i will work in this directory
WORKDIR "/app"
# basic setup
COPY package.json ./
# run a command
RUN npm install
COPY . .
# this is what will be executed when we run this
CMD ["node", "index"]
