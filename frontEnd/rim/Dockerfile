FROM node:18-alpine
WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install
COPY . /src
RUN npm run build
CMD ["npm", "run", "start"]