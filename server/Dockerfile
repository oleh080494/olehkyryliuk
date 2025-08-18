# Use Node.js base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the source code
COPY . .

# Expose the port your server runs on
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
