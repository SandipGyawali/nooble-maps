# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a second stage to reduce the final image size
FROM nginx:alpine

# Copy the built Next.js application from the builder stage
COPY --from=builder /app/.next /usr/share/nginx/html/.next
COPY --from=builder /app/public /usr/share/nginx/html

#Copy custom Nginx configuratoins
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf


# Expose the port the app runs on
EXPOSE 80

# Start NginxAC
CMD ["nginx", "-g", "daemon off;"]
