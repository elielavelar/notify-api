<p style="text-align: center">
    <a href="https://github.com/elielavelar/notify-api" target="_blank">
		Notify API
    </a>
    <h1 style="text-align: center">Notify API</h1>
</p>
<h2>Descripción</h2>
Notify API es una aplicación REST Full API muy simple que permite administrar las notificaciones de múltiples aplicaciones, agrupando por aplicación y usuario.

Permite realizar funciones básicas como: 
+ Registrar nuevas notificaciones
+ Actualizar notificaciones
+ Marcar como Leída/No Leída
+ Fijar una notificación
+ Filtrar notificaciones por:
  * Usuario
  * Aplicación
  * Tipo
  * Estado
+ Módulo de Difusión de notificaciones

### STACK TECNOLÓGICO
```
Lenguaje: Javascript + TypeScript
Framework: NestJS
  * Version: 10
Runtime: NodeJS
  * Version: 20.17.0 (LTS)
DB: MongoDB 
  * Version: 7.0.5
Arquitectura:
  Docker Container:
      - Services:
        + app
      - External:
        + MongoDB  
```
## Installation

```bash
$ yarn install
```

## Running the app on local environment

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## Running the app on Docker container

### Build Base Image
image: node:lts-alpine3.20

```bash
# development
$ docker build -t nodeapp:lts .
```

### Build Dev Image
image: nodeapp:lts (custom image built it on the step over)

```bash
# development
$ docker build -t notify-api:latest -f Dockerfile.dev
```

### Run Development Docker container
image: notify-api:latest (custom image built it on the step over)

```bash
# development
$ docker compose up --build -d
```

## PROYECTO
    Autor:          Eliel Avelar <https://github.com/elielavelar>

DIRECTORY STRUCTURE
-------------------

```
dist                contains build artifacts
node_modules        contains dependencies
src                 contains source code
    notification/   contains source code for the notification module
        dto/        contains source code for the Data Transfer Objects
        entities/   contains source code for the entities
        schemas/    contains source code for the schemas
    utils/          contains source code for the utilities scripts
test                contains unit tests
package.json        contains project metadata
README.md           contains project description
```
