# Use a Node version that meets Next.js requirements (>= Node 18)
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port (default Next.js port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
