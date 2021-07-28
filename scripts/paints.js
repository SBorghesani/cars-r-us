import { getPaintColors, setPaintColor } from "./database.js"

const paints = getPaintColors()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            // window.alert(`User chose paint package: ${event.target.value}`)
            setPaintColor(parseInt(event.target.value))
        }
    }
)




export const Paints = () => {
    let html = "<ul>"

    const listedItems = paints.map(paint => {
        return `<li>
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.paintColor}
        </li>`
    })

    html += listedItems.join("")
    html += "</ul>"

    return html
}