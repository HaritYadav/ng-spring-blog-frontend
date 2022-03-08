FROM node:16

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install
# RUN ngcc

COPY . .

EXPOSE 4200

CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check