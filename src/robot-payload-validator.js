

class RobotPayloadValidator {
    constructor(req) {
        this.payload = req.body;
        this.command = this.payload.command
        this.roomSize = this.payload.roomSize
        this.initLocation = this.payload.initLocation
    }

     validatePayload(){
        const requiredPayloadKeys = ['roomSize', 'initLocation', 'command']
        const hasAllKeys = requiredPayloadKeys.every(key => Object.keys(this.payload).includes(key));
        if (!hasAllKeys) {
            return false
        }
        const isCommandValid = this._validateCommand()
        const isRoomSizeValid = this._validateRoomSize()
        const isInitLocationValid = this._validateInitLocation()
        return isCommandValid && isRoomSizeValid && isInitLocationValid
    }

     _validateCommand() {
        return /^[LRF]+$/.test(this.command);
    }

    _validateRoomSize() {
        const requiredRoomSizeKeys = ['width', 'length']
        const hasAllKeys = requiredRoomSizeKeys.every(key => Object.keys(this.roomSize).includes(key));
        if (!hasAllKeys) return false
        return this._verifyRoomParameters(this.roomSize)
    }

    _validateInitLocation() {
        const requiredInitLocation = ['width', 'length', 'face']
        const hasAllKeys = requiredInitLocation.every(key => Object.keys(this.initLocation).includes(key));
        if (!hasAllKeys) return false
        const isFaceParamVerified = this._validateFaceParam()
        if (!isFaceParamVerified) return false
        return this._verifyRoomParameters(this.initLocation)
    }

    _verifyRoomParameters(roomParams){
        const requiredRoomSizeKeys = ['width', 'length']
        for (const key of requiredRoomSizeKeys) {
            const value = roomParams[key]
            if (!Number.isInteger(value)) return false
            if (value <= 0) return false
        }
        return  true;

    }

    _validateFaceParam(){
        const faceParam = this.initLocation.face
        return /^[NSWE]+$/.test(faceParam);
    }





}

module.exports = RobotPayloadValidator;


