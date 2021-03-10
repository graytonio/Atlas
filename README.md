# Altas Home Lab Dashboard

The goal of this project is to create a customizable dashboard for different services commonly running on home labs

## Running

This project is designed to run in a docker container that can be run using the command

```bash
docker run -d --name=atlas -p 80:80 --restart unless-stopped graytonio/atlas
```

## Running

To run the project locally or to modify and contribute to the code

```bash
git clone https://github.com/graytonio/Atlas.git
cd Atlas
yarn install
yarn start
```

## Development Mode

The project includes a dev/hot reload mode which can be run with

```bash
yarn dev
```
