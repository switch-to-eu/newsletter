# Use nginx to serve static files
FROM nginx:alpine

# Copy only the public folder to nginx html directory
COPY public/ /usr/share/nginx/html/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]