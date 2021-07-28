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

    for (const paint of paints) {
        html += `<li>
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.paintColor}
        </li>`
    }

    html += "</ul>"
    return html
}