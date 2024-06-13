# Use the official Nginx image
FROM nginx:alpine

# Copy the Nginx configuration file
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built applications
COPY dist /usr/share/nginx/html/linleasing-reg

# Expose port 80
# EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
