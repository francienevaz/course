function createNewRide() {
    const rideID = new Date.now()
    const rideRecord = {
        data: [],
        startTime: rideID,
        stopTime: null
    }
    localStorage.setItem(rideID, rideRecord)
    return rideID
}