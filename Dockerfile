FROM node:12-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Development
FROM builder AS development
CMD ["npm", "run", "start"]

# Test
FROM builder AS test
RUN npm run build
CMD ["npm", "run", "test"]

# Production
FROM nginx:1.18-alpine AS production
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
