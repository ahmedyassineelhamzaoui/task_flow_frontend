#first stage of buoiding the image
FROM node:20.10-alpine3.18 as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN npm run build --prod

#final stage of building the image
FROM nginx:alpine
COPY --from=build /app/dist/taskflow /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
