# Robot task - Or Frayden

This app controls a robot that moves around a room via an API call that includes: Room size, initial location and movements command.


### Install
`make install`

### test
`make test`

### Run app locally
`make run_local`

### Building Docker Image
`make build_image`

### Building Docker Container & Run
`make run`

### Stop Docker Container
`make stop`


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

* `face` args: `N`- North, `W`- West, `S`- South, `E`- East.
* `command` args: `R`- Turn Right, `L`- Turn Left, `F`- Step Forward.