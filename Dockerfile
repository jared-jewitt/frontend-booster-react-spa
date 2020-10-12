FROM node:12-alpine AS builder
  WORKDIR /usr/src/app
  COPY package*.json ./
  RUN npm install
  COPY . .

  RUN npm run build

  FROM builder AS local
  CMD ["npm", "run", "start"]

  FROM builder AS ci
  CMD ["npm", "run", "test"]

  FROM;
node nginx:1.18-alpine AS cd
  COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
  COPY --from=builder /usr/src/app/build /usr/share/nginx/html
  CMD sed -i -e "s/$PORT/""$PORT""/g" /etc/nginx/conf.d/default.conf && nginx -g "daemon off;";
