FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY babywalk.ru /etc/nginx/sites-available/babywalk.ru

RUN <<EOF 
mkdir /etc/nginx/sites-enabled && ln -s /etc/nginx/sites-available/babywalk.ru /etc/nginx/sites-enabled/ 
mkdir /etc/nginx/dhparam && openssl dhparam -out /etc/nginx/dhparam/dhparam.pem 2048
mkdir /etc/nginx/logs
EOF
