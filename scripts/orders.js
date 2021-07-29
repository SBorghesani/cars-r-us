import { getOrders, getPaintColors, getInteriors, getTechnologies, getWheels } from "./database.js"
const paints = getPaintColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrder = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
        )
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            }
            )
            const foundTechnology = technologies.find(
                (technology) => {
                    return technology.id === order.technologyId
                }
                )
                const foundWheel = wheels.find(
                    (wheel) => {
                        return wheel.id === order.wheelId
                    }
                    )
        try {
        const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheel.price 
        const costOutput = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD" 
        })
        return `<li>
            Order #${order.id} cost: ${costOutput} was placed on ${order.timestamp}
        </li>`
        }
        catch(err) {
            window.alert("You must select an option from each table. Please try again.")
            location.reload()
        }

}


export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrder)

    html += listItems.join("")
    html += "</ul>"

    return html
}
