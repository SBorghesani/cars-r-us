import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"





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
    `
}