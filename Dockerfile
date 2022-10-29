# Use the officlal image
FROM httpd:latest

# Copy files into the webserver directory
COPY . /usr/local/apache2/htdocs