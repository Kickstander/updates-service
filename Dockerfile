FROM node:8.12.0-alpine

# RUN mkdir -p /src/app

# WORKDIR /src/app
WORKDIR /bindmount

# COPY . /src/app

RUN yarn install

EXPOSE 3004

CMD ["npm", "run", "start:dev"]
