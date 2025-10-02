upstream frontend {
	server frontend:3000;
}

server {
	listen 80;
	server_name babywalk.ru;

	location /.well-known/acme-challenge/ {
		root /var/www/html;
		try_files $uri $uri/ =404;
    }

	location / {
		return 301 https://$host$request_uri;
    }
}
server {
	#listen 80;
	listen 443 ssl;
	server_name babywalk.ru;

	http2 on;
	ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;

    add_header Strict-Transport-Security "max-age=63072000" always;

    location ~* \.(jpg|jpeg|png|gif|ico|svg|mp4|webm|ogg|pdf)$ {
        proxy_pass http://frontend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        expires 1h;
        add_header Cache-Control "public, must-revalidate";
    }

	location / {
		proxy_pass http://frontend;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
}

ssl_trusted_certificate /etc/nginx/ssl/fullchain.pem;
