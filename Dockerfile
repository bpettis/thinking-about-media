# Use the officlal image
FROM httpd:2.4

# Copy files into the webserver directory
COPY . /usr/local/apache2/htdocs

EXPOSE ${PORT}