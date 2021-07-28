import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            // window.alert(`User chose interior package: ${event.target.value}`)
            setInterior(parseInt(event.target.value))
        }
    }
)




export const Interiors = () => {
    let html = "<ul>"

    for (const interior of interiors) {
        html += `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.interiorColor}
        </li>`
    }

    html += "<ul>"
    return html
}