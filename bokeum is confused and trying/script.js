function schedule() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    var today = date.getHours();
  
    //apply the time to the html element
    $("#time").text(time);
  
    //check if opened, else closed
    if (today >= 6 && today <= 10) {
      //remove and add class to change the gradient of the bg
      $("body").removeClass("closed");
      $("body").addClass("open");
  
      //toggle between messages
      $("#open-message").css("display", "block");
      $("#closed-message").css("display", "none");
    } 
    else {
      //remove and add class to change the gradient of the bg
      $("body").removeClass("open");
      $("body").addClass("closed");
  
      //toggle between messages
      $("#open-message").css("display", "none");
      $("#closed-message").css("display", "block");
    }
  }
  //initalize function
  schedule();
  
  setInterval(function() {
    //check time every minute
    schedule();
  }, 60000);



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

