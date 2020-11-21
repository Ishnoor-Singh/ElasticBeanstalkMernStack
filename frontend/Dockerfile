FROM node:8.7.0-alpine
RUN mkdir -p /app/server
WORKDIR /app/server
COPY package.json /app/server
RUN npm install --silent

COPY build /app/server/build
COPY server.js /app/server

CMD ["node", "server"]