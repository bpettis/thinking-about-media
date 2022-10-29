# Use the officlal image
FROM httpd:latest

# Copy files into the webserver directory
COPY . /usr/local/apache2/htdocs

# Use the PORT environment variable in Apache configuration files.
# https://cloud.google.com/run/docs/reference/container-contract#port
RUN sed -i 's/80/${PORT}/g' /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf