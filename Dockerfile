FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
  
  RUN wget -m https://imagemagick.org/archive/binaries/ImageMagick-i386-pc-solaris2.11.tar.gz
  
COPY package.json .

RUN npm install

COPY . .

CMD ["node", "."]
