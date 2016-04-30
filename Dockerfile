FROM ubuntu

MAINTAINER skholov2@gmail.com

WORKDIR /nexthome-web

COPY . /nexthome-web
ENV NODE_ENV=production

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - && \
    apt-get install -y nodejs && \
    npm install

EXPOSE 3000
CMD ["npm", "start"]
