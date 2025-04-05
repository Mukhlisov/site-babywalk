upstream frontend {
	server frontend:3000;
}
#server {
#	listen 80;
#	server_name babywalk.ru;
#	return 301 https://$host$request_uri;
#}
server {
	listen 80;
	#listen 443 ssl;
	#server_name babywalk.ru;

	#http2 on;
    #ssl_certificate /etc/nginx/ssl/fullchain.pem;
    #ssl_certificate_key /etc/nginx/ssl/privkey.pem;

    # add_header Strict-Transport-Security "max-age=63072000" always;

	location / {
		proxy_pass http://frontend;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
}
