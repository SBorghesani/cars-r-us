import { CarsRUs } from "./cars-r-us.js"


const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderHTML()