import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"
import { VehicleOptions } from "./car-options.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
            
        }

    }
)



export const CarsRUs = () => {
    return `
    <h1>Cars-R-Us</h1>
    
    <article class="choices">
        <section class="choices__paints options">
            <h2>Paints</h2>
            ${Paints()}
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            ${Interiors()}
        </section>
        <section class="choices__technologies options">
            <h2>Technology Packs</h2>
            ${Technologies()}
        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
    </article>

    <section class="jewelryOptions">
        <h2>Vehicle Type</h2>
        ${VehicleOptions()}
    </section>
        
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>
    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </article>
    `
}