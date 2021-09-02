const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = (accumulator, currentValue) => {(accumulator + currentValue)

return batteryBatches.reduce(totalBatteries);

}

// let totalBatteries = batteryBatches.reduce((accumulator, element) => accumulator + element, 0);

// return totalBatteries;