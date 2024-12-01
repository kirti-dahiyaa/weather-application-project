const userlocation = document.getElementById("location-button");

function passed(position) {
    console.log(position);
}

function failed(){
    console.log("Failed to get your Location");
}


userlocation.addEventListener('click',async ( ) => {

    navigator.geolocation.getCurrentPosition(passed, failed)
 
});