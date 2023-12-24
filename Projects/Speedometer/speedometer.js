const speedElement = document.querySelector('#speed')
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');

let watchID = null;
let currentRide = null;

btnStart.addEventListener("click", () => {
    if (watchID) 
        return
    function handleSuccess (position){  
        addPosition(currentRide, position)
        console.log(position)
        speedElement.innerText = position.coords.speed ? (position.coords.speed * 3.6 ).toFixed(1): 0;
    }

    function handleError (error){
        console.log(error.msg)
    }

    const options = {enableHoghAccurancy: true}
    currentRide = createNewRide()
    watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, options)    

    btnStart.classList.add("d-none")
    btnStop.classList.remove("d-none")
})

btnStop.addEventListener("click", () => {
    if (!watchID) 
        return

    navigator.geolocation.clearWatch(watchID)
    watchID = null
    updateStopTime(currentRide)
    currentRide = null
    btnStart.classList.remove("d-none")
    btnStop.classList.add("d-none")

    window.location.href = "./"
})