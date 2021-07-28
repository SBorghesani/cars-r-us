import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            // window.alert(`User chose technology package: ${event.target.value}`)
            setTechnology(parseInt(event.target.value))
        }
    }
)




export const Technologies = () => {
    let html = "<ul>"

    const listedItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.packageType}
        </li>`
    })

    html += listedItems.join("")
    html += "</ul>"

    return html
}