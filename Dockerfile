# Use an official Node.js image as the base
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files and install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files and build the app
COPY . .
ENV NODE_ENV=production
RUN npm run build --if-present

# Remove development dependencies
RUN npm prune --omit=dev

# Final stage for running the app
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app

# Expose the port your app runs on, if necessary
EXPOSE 3000

# Run the app
CMD ["node", "dist/index.js"]