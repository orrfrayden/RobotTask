const RobotService = require('../src/robot-service');
const RobotPayloadValidator = require('./robot-payload-validator');


class robotController {
    static navigateRobot(req, res)  {
        const robotPayloadValidator = new RobotPayloadValidator(req)
        const isPayloadValid = robotPayloadValidator.validatePayload();
        if (!isPayloadValid) {
            res.status(400).json({ error: 'Invalid payload' });
            return;
        }
        try {
            const { roomSize, initLocation, command } = req.body;
            const robotService = new RobotService({
                width:roomSize.width ,
                length:roomSize.length})
            robotService.uploadStartingPosition({
                width:initLocation.width,
                length:initLocation.length,
                face:initLocation.face})
            robotService.uploadNavigationCommands(command)
            robotService.startNavigation()
            const currentLocation = robotService.getCurrentLocation()
            res.status(200);
            res.json(currentLocation);
        } catch (err) {
            res.status(500);
            res.json({ error: err.message });
        }
    }
}

module.exports = robotController;
