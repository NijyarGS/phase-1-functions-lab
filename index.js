// Code your solution in this file!
function distanceFromHqInBlocks(pickUp)
{

 return Math.abs(pickUp-42);

}

function distanceFromHqInFeet(pickUp)
{
    return Math.abs(distanceFromHqInBlocks(pickUp)*264);

}

function distanceTravelledInFeet(startDest,endDest)
{
 return Math.abs((endDest-startDest)*264);
}

function calculatesFarePrice(startDest,endDest)
{
    
    let feet = distanceTravelledInFeet(startDest,endDest)

    // The first four hundred feet are free. For a distance between 400 and 2000 feet, 
    // the price is 2 cents per foot (not including 400, which are free!). 
    // Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
    // Finally, Scuber does not allow any rides over 2500 feet — the function returns 
    // 'cannot travel that far' if a ride over 2500 feet is requested

    if (feet<=400)
    {
        return 0;
    }

    else if (feet>400 && feet<=2000)
    {
        return 2.56;
    }
    else if (feet>2000 && feet<=2500)
    {
        return 25;
    }

    else if (feet>2500)
    {
        return "cannot travel that far";
    }
}