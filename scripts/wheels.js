import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            // window.alert(`User chose wheel package: ${event.target.value}`)
            setWheel(parseInt(event.target.value))
        }
    }
)



export const Wheels = () => {
    let html = "<ul>"

    const listedItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheelType}
        </li>`
    })

    html += listedItems.join("")
    html += "</ul>"

    return html
}