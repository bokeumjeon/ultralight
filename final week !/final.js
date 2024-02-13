 // Array of HTML document URLs
 var htmlDocuments = [
    'recipe1.html',
    'recipe2.html',
    'recipe3.html'
];

// Function to get a random index from the array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Get a random HTML document URL
var randomIndex = getRandomIndex(htmlDocuments);
var randomDocument = htmlDocuments[randomIndex];

// Set the src attribute of the iframe
document.getElementById('randomIframe').src = randomDocument;

function isBusinessHours(currentTime) {
    const openingTime = 6; 
    const closingTime = 10; 
    
    return currentTime.getHours() >= openingTime && currentTime.getHours() < closingTime;
}

function getPhiladelphiaTime() {
    const philadelphiaTimezone = 'America/New_York';
    const currentTimeInMilliseconds = Date.now();
    const currentTimeInPhiladelphia = new Date(currentTimeInMilliseconds).toLocaleTimeString('en-US', { timeZone: philadelphiaTimezone });
    return new Date(currentTimeInPhiladelphia);
}

const currentDateTimeInPhiladelphia = getPhiladelphiaTime();

if (isBusinessHours(currentDateTimeInPhiladelphia)) {
    bodyElement.classList.remove("closed");
    bodyElement.classList.add("open");

    // Toggle between messages
    document.getElementById("open-message").style.display = "block";
    document.getElementById("closed-message").style.display = "none";
  } 
 else {
//remove and add class to change the gradient of the bg
bodyElement.classList.remove("open");
bodyElement.classList.add("closed");

// Toggle between messages
document.getElementById("open-message").style.display = "none";
document.getElementById("closed-message").style.display = "block";

}
schedule();
  
setInterval(function() {
  //check time every minute
  schedule();
}, 60000);

function myFunction() {
  var x = document.getElementById("beefsouptranslate");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
