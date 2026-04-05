# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage only - use pre-built dist
FROM node:20-alpine
WORKDIR /app
COPY dist ./dist
COPY package*.json ./
RUN npm install --omit=dev

ENV PORT=4000
ENV NODE_ENV=production

EXPOSE 4000

CMD ["node", "dist/frontend/server/server.mjs"]