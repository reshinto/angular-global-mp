FROM node:14-alpine as build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build-deps /app/dist/angular-global-mp /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
