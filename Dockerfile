FROM node:latest

WORKDIR /app
#ADD --keep-git-dir=true git@github.com:Mukhlisov/site-babywalk.git /app
COPY . /app
RUN npm run build

EXPOSE 3000

CMD ["cd", "/app", "npm", "run", "start"]