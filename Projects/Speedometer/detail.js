const params = new URLSearchParams(window.location.search)
const rideID = params.get("id")
const ride = getRideRecord(rideID)
console.log(ride)

document.addEventListener("DOMContentLoaded", async () => {

    const firstPosition = ride.data[0]
    const firstLocationData = await getLocationData(firstPosition.latitude, firstPosition.longitude);

    const dataElement = document.createElement("div")
	dataElement.className = "flex-fill d-flex flex-column"

	const cityDiv = document.createElement("div");
	cityDiv.innerText = `${firstLocationData.city}`
	cityDiv.className = "text-primary mb-2"

	const maxSpeedDiv = document.createElement("div");
	maxSpeedDiv.innerText = `Max Speed: ${getMaxSpeed(ride.data)} Km/h`
	maxSpeedDiv.className = "h5"

	const distanceDiv = document.createElement("div")
	distanceDiv.innerText = `Distance: ${getDistance(ride.data)} Km`

	const durationDiv = document.createElement("div")
	durationDiv.innerText = `Duration: ${getDuration(ride)}`

	const dateDiv = document.createElement("div")
	dateDiv.innerText = `${getStartDate(ride)}`
	dateDiv.className = "text-secondary mt-2"

	dataElement.appendChild(cityDiv)	
	dataElement.appendChild(maxSpeedDiv)
	dataElement.appendChild(distanceDiv)
	dataElement.appendChild(durationDiv)
	dataElement.appendChild(dateDiv)

    document.querySelector("#data").appendChild(dataElement)

	const deleteBtn = document.querySelector("#deleteBtn")
	deleteBtn.addEventListener("click", () => {

		deleteRide(rideID)
		window.location.href = "./"
	})

    const map = L.map("mapDetail")
    map.setView([firstPosition.latitude, firstPosition.longitude], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
	subdomains: 'abcd',
	minZoom: 5,
	maxZoom: 15,
	ext: 'png'
	}).addTo(map)

	const positionsArray = ride.data.map((position => {
	return [position.latitude, position.longitude]
	}))

	const polyline = L.polyline(positionsArray, {color: "#f00"})  
	polyline.addTo(map)

	map.fitBounds(polyline.getBounds())

	})

	// Para mudar o estilo do mapa https://leaflet-extras.github.io/leaflet-providers/preview/
