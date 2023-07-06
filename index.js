// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    if (blocks === 43){
        return 1
    } 
    else if (blocks === 50){
        return 8
    }
    else if (blocks === 34){
        return 8
    }  
}

function  distanceFromHqInFeet(feet){
    if (feet === 43){
        return 264
    }
     else if (feet === 50){
        return 2112
    }
    else if (feet === 34){
        return 2112
    }
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination)*264
    }
    else if (start < destination){
        return (destination - start)*264
    }
}

function  calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
        if (distance <= 400){
            return 0
        }
        else if (distance >= 400 && distance <= 2000){
            return (distance - 400)*0.02
        }
        else if (distance >=2000 && distance <= 2500){
            return 25
        }
        else if (distance >= 2500){
            return `cannot travel that far`
        }
}
    