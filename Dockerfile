FROM node:8.12.0-alpine

# Uncomment line below for prod
RUN mkdir -p /src/app

# Uncomment line below for prod
WORKDIR /src/app


# Uncomment line below for prod
COPY . /src/app

RUN yarn install

EXPOSE 80

# Uncomment line below for prod
CMD ["npm", "run", "start:prod"]
