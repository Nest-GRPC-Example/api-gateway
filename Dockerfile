FROM node:16-alpine

WORKDIR /app

COPY . .

ENV AGW_PORT=${AGW_PORT}
ENV MSA_HOST=${MSA_HOST}
ENV AUTH_PORT=${AUTH_PORT}
ENV ORDER_PORT=${ORDER_PORT}
ENV PRODUCT_PORT=${PRODUCT_PORT}

RUN apk add --no-cache git
RUN npm i -g yarn
RUN yarn install
RUN yarn build

CMD ["yarn" "start"]

EXPOSE 3000