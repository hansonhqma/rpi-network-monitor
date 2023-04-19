FROM node:18-alpine
WORKDIR /src
COPY package.json package-lock.json /src/

COPY . /src
CMD ["npm", "run", "dev"]