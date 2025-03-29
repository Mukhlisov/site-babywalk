FROM node:latest

WORKDIR /app
#ADD --keep-git-dir=true git@github.com:Mukhlisov/site-babywalk.git /app
COPY . /app
RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]