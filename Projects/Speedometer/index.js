const rideListElement = document.querySelector("#rideList")
const allRides = getAllRides()

// o allRides passa a ser um objeto e fica possível usar o FOR para coletar os dados do localStorage, para incluir na lista

allRides.forEach(([id, value]) => {
    const ride = JSON.parse(value)
    ride.id = id

    const itemElement = document.createElement("li");
    itemElement.id = ride.id
    itemElement.innerText = ride.id
    rideListElement.appendChild(itemElement)

    console.log(ride)
})