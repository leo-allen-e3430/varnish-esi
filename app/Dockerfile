FROM node:14-alpine

ENV APP_DIR=/app/
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY package*.json index.js ${APP_DIR}
RUN npm install
EXPOSE 3333
CMD ["npm", "run", "dev"]
