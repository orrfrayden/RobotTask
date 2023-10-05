const mocked = require('../tests/robot-controller.mock');
const RobotController = require('../src/robot-service');

const finalLocationsGold = [{width:1, length:3, face:'N'}, {width:3, length:1, face:'E'}]

describe('Robot Controller', function () {
  it('when the Robot get a room size, an initial location and a command, it should end up at the right location', function () {
    const mockedRobotArgs = mocked.mockedRobotArgs
    for (const args_index in mockedRobotArgs) {
      const  { roomSize } = mockedRobotArgs[args_index]
      const  { initLocation } = mockedRobotArgs[args_index]
      const  { command } = mockedRobotArgs[args_index]
      const robotController = new RobotController({
        width:roomSize.width ,
        length:roomSize.length})
      robotController.uploadStartingPosition({
        width:initLocation.width,
        length:initLocation.length,
        face:initLocation.face})
      robotController.uploadNavigationCommands(command)
      robotController.startNavigation()
      const finalLocation = {
        width: robotController.widthCurrent,
        length: robotController.lengthCurrent,
        face: robotController.faceCurrent
          }
      expect(finalLocation).toEqual(finalLocationsGold[args_index])
    }
  });
  it('when the Robot get a command that takes it out of the room, an error is being returned', function () {
    const mockedRobotArgs = mocked.mockedRobotArgsError
    const  { roomSize } = mockedRobotArgs
    const  { initLocation } = mockedRobotArgs
    const  { command } = mockedRobotArgs
    const robotController = new RobotController({
      width:roomSize.width ,
      length:roomSize.length})
    robotController.uploadStartingPosition({
      width:initLocation.width,
      length:initLocation.length,
      face:initLocation.face})
    robotController.uploadNavigationCommands(command)
    let error;
    try {
      robotController.startNavigation();
    } catch (e) {
      error = e;
    }
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Out of bounds at 0 -1');
  });

});
