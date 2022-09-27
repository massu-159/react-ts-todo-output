FROM node:16.15.0-alpine
ENV NODE_VERSION 14.18.1
WORKDIR /front 
COPY ./front /front
EXPOSE 3000
ENV CI=true