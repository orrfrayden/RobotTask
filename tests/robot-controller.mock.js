module.exports = {
  mockedRobotArgs: [{
    roomSize: {width: 5, length : 5},
    initLocation: {width :1, length : 2, face: 'N'},
    command: 'RFRFFRFRF'
  }, {
    roomSize: { length : 5, width :5},
    initLocation: { length : 0, width :0, face: 'E'},
    command: 'RFLFFLRF'
  }],
  mockedRobotArgsError: {
    roomSize: { length : 3, width :3},
    initLocation: { length : 2, width :2, face: 'N'},
    command: 'FFLFFRF'
  }
};
