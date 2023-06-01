const rideListElemt = document.querySelector("#rideList")
const allRides = getAllRides()

allRides.forEach(async ([id, value]) => {
	const ride = JSON.parse(value)
	ride.id = id
	
	console.log(ride)

	const firstPosition = ride.data[0]
	console.log(await getLocationData(firstPosition.latitude, firstPosition.longitude));
	const itemElement = document.createElement("li")
	itemElement.id = ride.id
	// itemElement.innerText = ride.id
	rideListElement.appendChild(itemElement)
})

async fuction getLocationData (latitude, longitude) {
	const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&=localityLanguage=en`;
	
	const response = await fetch(url)
	
	return await response.json()
}