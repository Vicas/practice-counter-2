// The actual counter class, which keeps track of all events

class RatioCounter {
    constructor() {
        this.counterDict = new Map()
        this.inputHistory = new Array()
    }

    incrementCounter(value) {
        this.inputHistory.push(value)
    }
}

exports.RatioCounter = RatioCounter