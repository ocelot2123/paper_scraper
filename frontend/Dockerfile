FROM node:15.3.0-alpine3.10
USER root
WORKDIR /frontend
COPY . /frontend
ARG API_URL
ENV REACT_APP_HOST_IP_ADDRESS $API_URL
RUN npm install
RUN npm run build