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
FROM builder AS production
RUN npm run build
RUN npm install --quiet -g serve
CMD serve -p $PORT -s dist
