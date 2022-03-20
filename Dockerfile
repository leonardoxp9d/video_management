FROM node

WORKDIR /usr/video_management

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3336

CMD ["npm","run","dev"]