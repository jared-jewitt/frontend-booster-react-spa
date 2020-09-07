FROM node:12-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

FROM builder AS local
CMD ["npm", "run", "start"]

FROM builder AS ci
RUN npm run build
CMD ["npm", "run", "test"]

FROM nginx:1.18-alpine AS cd
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=ci /usr/src/app/build /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
