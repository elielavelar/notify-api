FROM node:lts-alpine3.20 as install
LABEL stage="install"

WORKDIR /src/install

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM node:lts-alpine3.20 as build
LABEL stage="build"

WORKDIR /src/build
COPY --from=install /src/install .
COPY . .

RUN yarn build
RUN yarn install --production 
#--ignore-scripts --prefer-offline

FROM node:lts-alpine3.20 as deploy
LABEL stage="deploy"

WORKDIR /app
COPY --from=build /src/build/dist/main.js index.js
COPY --from=build /src/build/node_modules node_modules
ENTRYPOINT node .


