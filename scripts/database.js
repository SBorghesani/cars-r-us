const database = {
    paintColors: [
        {id: 1, paintColor: "silver", price: 299.99},
        {id: 2, paintColor: "midnight blue", price: 499.99},
        {id: 3, paintColor: "firebrick red", price: 599.99},
        {id: 4, paintColor: "spring green", price: 299.99}
    ],
    interiors: [
        {id: 1, interiorColor: "beige fabric", price: 199.99 },
        {id: 2, interiorColor: "charcoal fabric", price: 199.99},
        {id: 3, interiorColor: "white leather", price: 299.99},
        {id: 4, interiorColor: "black leather", price: 299.99}
    ],
    technologies: [
        {id: 1, packageType: "basic package", price: 199.99},
        {id: 2, packageType: "navigation package", price: 299.99},
        {id: 3, packageType: "visibility package", price: 399.99},
        {id: 4, packageType: "ultra package", price: 499.99},
    ],
    wheels: [
        {id: 1, wheelType: "17-inch pair radial", price: 199.99},
        {id: 2, wheelType: "17-inch pair black", price: 199.99},
        {id: 3, wheelType: "18-inch pair spoke silver", price: 399.99},
        {id: 4, wheelType: "18-inch pair spoke black", price: 399.99}
    ],
    vehicleOptions: [
        {id: 1, vehicleType: "Car", modifier: 1},
        {id: 2, vehicleType: "SUV", modifier: 1.5},
        {id: 3, vehicleType: "Truck", modifier: 2.25}
    ],
    customOrders: [

    ],
    orderBuilder: {}
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getVehicleOptions = () => {
    return database.vehicleOptions.map(vehicleOption => ({...vehicleOption}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setVehicleOption = (id) => {
    database.orderBuilder.vehicleOptionId = id
}


export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    let lastIndex = null
    if (database.customOrders.length === 0) {
        lastIndex = 0
        newOrder.id = lastIndex + 1
    } else {
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1 
    }
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}