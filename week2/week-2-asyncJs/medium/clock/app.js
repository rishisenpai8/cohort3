// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?


// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)


function formatTime(unit){
    return unit<10? '0'+unit: unit;
}


function displayTime(){
    const now = new Date();

    //24hours format
    const hours24 = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    const time2 = `${hours24}:${minutes}:${seconds}`


    //12hour format 
    let hours12 = now.getHours()%12 || 12;
    const ampm = now.getHours()>=12? 'PM' : 'AM';
    hours12 = formatTime(hours12);

    const time12 = `${hours12}: ${minutes}: ${seconds} : ${ampm}`
    
    console.clear()
    console.log(`24 Hour Format: ${time2}`);
    console.log(`12 Hour Format: ${time12}`);
}

setInterval(displayTime, 1000)

