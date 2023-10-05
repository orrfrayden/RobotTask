

const RobotService = require('../src/robot-service');
class robotController {
    static async navigateRobot(req, res)  {
        const { roomSize, initLocation, command } = req.body;
        try {
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
