FROM node:15.2.1-alpine
RUN mkdir -p /client.testing/src/
WORKDIR /client.testing/src/
COPY package.json /client.testing/
RUN yarn
COPY . /client.testing/src/
CMD ["yarn", "start"]
