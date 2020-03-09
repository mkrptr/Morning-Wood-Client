FROM node:alpine as build-stage
WORKDIR /usr/src/app/client
COPY package.json ./
RUN yarn install
ENV PATH ./node_modules/.bin:$PATH
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build-stage /usr/src/app/client/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
