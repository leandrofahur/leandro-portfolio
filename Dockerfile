FROM node:16 AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Vite Service
FROM node:16 AS vite-service

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/node_modules /usr/src/app/node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# Storybook Service
FROM node:16 AS storybook-service

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/node_modules /usr/src/app/node_modules
COPY . .

EXPOSE 6006

CMD ["npm", "run", "storybook"]