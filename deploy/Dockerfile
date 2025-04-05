FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY babywalk.ru /etc/nginx/sites-available/babywalk.ru

RUN <<EOF 
apt-get update && apt-get install nano
mkdir /etc/nginx/sites-enabled && ln -s /etc/nginx/sites-available/babywalk.ru /etc/nginx/sites-enabled/ 
mkdir /etc/nginx/logs
EOF
