FROM node:latest

WORKDIR /app

# Copy source code (before installing dependencies)
COPY . .

# Install bun and dependencies
RUN npm i -g bun && bun install --frozen-lockfile

# Build the portal app
RUN npx modern deploy

# Expose port
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", ".output/index"]