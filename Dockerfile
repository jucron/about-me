# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY ./ /app/

# Install project dependencies and fix any vulnerabilities
RUN npm install
#RUN npm audit fix

#Install angular cli
RUN npm install -g @angular/cli@latest

#RUN ng update --all --force

# Build the Angular application
RUN npm run build --prod

# Use an official Nginx image to serve the built application
FROM nginx:alpine
COPY --from=0 /app/dist/about-me /usr/share/nginx/html

# Add certificates
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY /nginx/fullchain.crt /etc/nginx/ssl/fullchain.crt
COPY /nginx/private.key /etc/nginx/ssl/private.key

# Expose port 80 and 443
EXPOSE 80
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
