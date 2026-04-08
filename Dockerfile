FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY *.html /usr/share/nginx/html/
COPY *.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/
COPY products/ /usr/share/nginx/html/products/

EXPOSE 80
