// Code your solution here

//returns all drivers that match the passed in name
function findMatching(drivers, name){
   return drivers.filter(driver =>
        driver.toLowerCase() === name.toLowerCase()
    )
}

//takes an array of driver and string as arguments
//returns all drivers who name begins with the provided letters
function fuzzyMatch(drivers, letter){
    return drivers.filter(driver => 
       driver.toLowerCase().indexOf(letter.toLowerCase()) === 0
    )
}

//takes an array of drivers and a string as an argument
//each element of the drivers array
function matchName(drivers, driverName){
    return drivers.filter(driver =>
        driver.name === driverName    
    )
}