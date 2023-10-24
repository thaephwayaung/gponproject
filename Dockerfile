# FROM node:19.4-bullseye AS build
FROM node:14-alpine AS build

# Specify working directory other than /
WORKDIR /usr/src/app

#ENV Testing Start

ARG REACT_APP_API_SERVER_URL
ENV REACT_APP_API_SERVER_URL=$REACT_APP_API_SERVER_URL

ARG REACT_APP_MAP_KEY
ENV REACT_APP_MAP_KEY=$REACT_APP_MAP_KEY

ARG REACT_APP_MAP_ID
ENV REACT_APP_MAP_ID=$REACT_APP_MAP_ID

ARG REACT_APP_ENCRYPTION_KEY
ENV REACT_APP_ENCRYPTION_KEY=$REACT_APP_ENCRYPTION_KEY

RUN echo "REACT_APP_API_SERVER_URL=$REACT_APP_API_SERVER_URL" > .env && \
    echo "REACT_APP_MAP_KEY=$REACT_APP_MAP_KEY" >> .env && \
    echo "REACT_APP_MAP_ID=$REACT_APP_MAP_ID" >> .env && \
    echo "REACT_APP_ENCRYPTION_KEY=$REACT_APP_ENCRYPTION_KEY" >> .env

RUN cat .env

#ENV Testing End

# Copy only files required to install
# dependencies (better layer caching)
COPY package*.json ./

# Use cache mount to speed up install of existing dependencies
# RUN --mount=type=cache,target=/usr/src/app/.npm \
#     npm set cache /usr/src/app/.npm && \
#     npm install

RUN npm install

COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.23-alpine-perl

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 2126
