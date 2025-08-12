FROM node:latest

WORKDIR /

# Copy workspace configuration
COPY package.json bun.lockb* ./

# Install all dependencies (workspace + portal)
RUN npm i -g bun && bun install --frozen-lockfile

# Copy the entire source code
COPY . .

# Build the portal app
RUN npx modern deploy

# Expose port
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", ".output/index"]