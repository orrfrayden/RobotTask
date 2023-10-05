'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const RobotController = require('../src/robot-controller');

const app = express();
app.use(bodyParser.json());
app.post('/robot/navigate', (req, res,next) => {
  try {
    RobotController.navigateRobot(req, res)
  } catch (err) {
    next(err);
  }
});



const PORT =  8082;
app.listen(PORT, () => console.log('Server is listening to port ' + PORT ));


