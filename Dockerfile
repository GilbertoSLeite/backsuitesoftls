# syntax=docker/dockerfile:1

FROM node:17.1.0
ENV NODE_ENV=production

WORKDIR /home/gilbertosleite/Documentos/DevEnvironment/backsuitesoftls

COPY ["/acervovirtual/bancoimagens/microsservicos/cadastroimagem/package.json", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "bin/www" ]
