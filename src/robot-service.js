

class RobotService {
    constructor({width , length}) {
        this.lengthTotal = length;
        this.widthTotal = width;
        this.stepsToFace = {
            'R' : {
                'N': 'E',
                'E': 'S',
                'S': 'W',
                'W': 'N'
            },
            'L' : {
                'N': 'W',
                'W': 'S',
                'S': 'E',
                'E': 'N'
            }
        }
    }

    uploadStartingPosition({width, length, face}) {
        this.lengthCurrent = length;
        this.widthCurrent = width;
        this.faceCurrent = face
    }

    uploadNavigationCommands(command) {
        this.command = command;
    }

    startNavigation() {
        for (const step of this.command) {
            this._processStep(step)
            if (this._isOutOfBounds()) {
                console.log(`Out of bounds at ${this.widthCurrent} ${this.lengthCurrent}`)
                throw Error(`Out of bounds at ${this.widthCurrent} ${this.lengthCurrent}`);
            }
        }
    }

    getCurrentLocation() {
        console.log(`Report: ${this.widthCurrent}  ${this.lengthCurrent}  ${this.faceCurrent} `)
        return {width: this.widthCurrent, length:this.lengthCurrent, face:this.faceCurrent}
    }

    _processStep(step) {
        if (step !== 'F') {
            this._setFace(step)
        } else {
            this._takeStep()
        }
    }

    _setFace(step) {
        this.faceCurrent = this.stepsToFace[step][this.faceCurrent]
    }

    _isOutOfBounds() {
        return (this.widthCurrent < 0) || (this.lengthCurrent < 0) || (this.widthCurrent > this.widthTotal) || (this.lengthCurrent > this.lengthTotal)
    }

    _takeStep() {
        if (this.faceCurrent === 'E') {
            this.widthCurrent += 1
        } else if (this.faceCurrent === 'W') {
            this.widthCurrent -= 1
        } else if (this.faceCurrent === 'N') {
            this.lengthCurrent -= 1
        } else if (this.faceCurrent === 'S') {
            this.lengthCurrent += 1
        }
    }
}

module.exports = RobotService;


