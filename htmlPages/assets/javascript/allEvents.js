$(document).ready(function () {
    // The get request will grab all of the events from the Data Base
   $.get("/api/events", function(data) {
        // (data) is two things
        // 1) userId - This is the current logged in users ID
        // 2) ResultsArr - This is an array that holds all of the events
        // You can see it in the console in the browser
        console.log(data);
   });
});