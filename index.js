// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, string){
    
    return drivers.filter(
        function (nameOfDriver){
            return nameOfDriver.toUpperCase() === string.toUpperCase();
        }
    )
}

function fuzzyMatch (drivers, string){
    const firstLetter = string.length;
    return drivers.filter (function (driverName){
        return driverName.slice(0, firstLetter) === string;
    })
}

function matchName (drivers, string){
    return drivers.filter(function (driver) {
        return driver.name.toUpperCase() === string.toUpperCase();
    })

}





