import { getVehicleOptions, setVehicleOption } from "./database.js"

const vehicleOptions = getVehicleOptions()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "vehicleOption") {
            setVehicleOption(parseInt(event.target.value))
        }
    }
)




export const VehicleOptions = () => {
    let html = "<ul>"

    const listedItems = vehicleOptions.map(vehicleOption => {
        return `<li>
            <input type="radio" name="vehicleOption" value="${vehicleOption.id}" /> ${vehicleOption.vehicleType}
        </li>`
    })

    html += listedItems.join("")
    html += "</ul>"

    return html
}