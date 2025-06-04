# Multi-stage build
# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the React app
RUN npm run website:build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy the built React app
COPY --from=builder /app/dist /usr/share/nginx/html/

# Copy static files (newsletters, assets)
COPY public/ /usr/share/nginx/html/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]