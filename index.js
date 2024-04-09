// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, selected) {
    const newDrivers = selected.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === newDrivers);
  }

function fuzzyMatch(drivers, S){
    return drivers.filter(driver => driver.startsWith(S));
}

function matchName(driversObject, match){
    return driversObject.filter(driver => driver.name === match)
}
