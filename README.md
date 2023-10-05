# Robot task - Or Frayden

## Install and run locally

1. run `nvm install`
2. run `node src/app.js`

## Install and run via docker

1. build container  `docker build -t task_robot .`
2. run `docker run -it -p 8082:8082 task_robot`

## Test

1. run tests `npx jest`

## Usage

The app listens to port 8082 and can be run via an API call:

`POST http://localhost:8082/robot/navigate`

Payload example:

`
{
"roomSize":{"width": 5, "length" : 5},
"initLocation": {"width" :1, "length" : 1, "face": "N"},
"command": "FRFF"
}
`