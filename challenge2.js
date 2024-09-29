function speedCheck(speed) {
    const speedLimit = 70
        
    // If speed is less than the speed limit
    if (speed <= speedLimit) {
        console.log("Ok")
    } else {
        let demeritPoints;
        demeritPoints = Math.floor((speed - speedLimit) / 5)
        
        // If demerit points exceed 12 points
        if (demeritPoints > 12) {
            console.log("License suspended")
        } else {
            console.log(`Points: ${demeritPoints}`)
        }
    }
}

let speed;
speed= parseFloat(prompt("Enter the car's speed (km/h):"))
speedCheck(speed);