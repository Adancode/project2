$(document).ready(function () {
    // The get request will grab all of the events from the Data Base
    $.get("/api/events", function (data) {
        // (data) is two things
        // 1) userId - This is the current logged in users ID
        // Check back to event-api-route.js when a GET with a route of api/events
        // to see how we are getting (data)
        // 2) ResultsArr - This is an array that holds all of the events
        // You can see it in the console in the browser
        // console.log(data);

        // Creating variables to make life easier
        var currentUser = data.userId;
        var events = data.ResultsArr;
        // Setting the id where the cards will be placed to a var for ease
        var listOfEvents = $("#eventList");
        // Looping through events to build the event cards out
        for (var i = 0; i < events.length; i++) {

            // console.log(events[i]);
            // Checking if the currentUser is the one that created the event
            if (events[i].UserId === currentUser) {

                var eventCard = $("<div>");
                eventCard.attr("id", "card-" + events[i].id);

                var eventName = $("<div>");
                eventName.text(events[i].eventName);

                var eventDate = $("<div>");
                eventDate.text("When: " + events[i].date);

                var eventLocation = $("<div>");
                eventLocation.text("Where: " + events[i].location);

                var eventDescription = $("<div>");
                eventDescription.text(events[i].description);

                var sponsorBtn = $("<button>");
                sponsorBtn.text("Sponsor");
                sponsorBtn.addClass("sponsor-btn");
                sponsorBtn.attr("id", "sponsorBtn-" + events[i].id);

                // EDIT AND DELETE
                var editAndDelete = $("<div>");
                editAndDelete.attr("id", "editAndDelete-wrapper-" + events[i].id);

                var editBtn = $("<button>");
                editBtn.text("Edit");
                editBtn.attr("id", "editBtn-" + events[i].id);

                var deleteBtn = $("<button>");
                deleteBtn.text("Delete");
                deleteBtn.attr("id", "deleteBtn-" + events[i].id);

                editAndDelete.append(editBtn);
                editAndDelete.append(deleteBtn);


                eventCard.append(eventName);
                eventCard.append(eventDate);
                eventCard.append(eventLocation);
                eventCard.append(eventDescription);
                eventCard.append(sponsorBtn);
                eventCard.append(editAndDelete);

                listOfEvents.append(eventCard);
            }
            // ELSE
            else {

                var eventCard = $("<div>");
                eventCard.attr("id", "card-" + events[i].id);

                var eventName = $("<div>");
                eventName.text(events[i].eventName);

                var eventDate = $("<div>");
                eventDate.text("When: " + events[i].date);

                var eventLocation = $("<div>");
                eventLocation.text("Where: " + events[i].location);

                var eventDescription = $("<div>");
                eventDescription.text(events[i].description);

                var sponsorBtn = $("<button>");
                sponsorBtn.text("Sponsor");
                sponsorBtn.addClass("sponsor-btn");
                sponsorBtn.attr("id", "sponsorBtn-" + events[i].id);

                eventCard.append(eventName);
                eventCard.append(eventDate);
                eventCard.append(eventLocation);
                eventCard.append(eventDescription);
                eventCard.append(editAndDelete);

                listOfEvents.append(eventCard);

                eventCard.append(eventName);
                eventCard.append(eventDate);
                eventCard.append(eventLocation);
                eventCard.append(eventDescription);
                eventCard.append(sponsorBtn);

                listOfEvents.append(eventCard);
            }
        }
        // Create the card with an #id of event-card(events[i].id) to have a unique #id
    });
    // Handle click on Sponsor, Edit, or Delete button
    $(document).on("click", ".sponsor-btn", function (event) {
        console.log("clicked");
        var theNumberId = $(this).attr("id");
        var splicedNumArray = theNumberId.split("-");
        var theNumberItself = splicedNumArray[1];
        // console.log("theNumberItself");
        // console.log(theNumberItself);
        // console.log("theNumberItself");
        // console.log("card-" + theNumberItself);

        $("#sponsorBtn-" + theNumberItself).hide();


        var rowVendorAndProduct = $("<div>");
        rowVendorAndProduct.addClass("row");

        var rowDescription = $("<div>");
        rowDescription.addClass("row");

        var rowButton = $("<div>");
        rowButton.addClass("row");

        sponsorArea = $("<div>");
        sponsorArea.attr("id", "sponsorArea-" + theNumberItself);

        var vendorName = $("<input>");
        vendorName.attr("type", "text");
        vendorName.attr("placeholder", "Vendor Name");
        vendorName.addClass("vendor-name-input");

        var productName = $("<input>");
        productName.attr("type", "text");
        productName.attr("placeholder", "Product Name");
        productName.addClass("product-name-input");

        var productDescription = $("<textarea>");
        productDescription.attr("type", "text");
        productDescription.attr("placeholder", "Description");
        productDescription.addClass("product-description-input");

        var eventSponsorshipBtn = $("<button>");
        eventSponsorshipBtn.text("Sponsor Event");
        eventSponsorshipBtn.addClass("event-sponsorship");

        var cancelBtn = $("<button>");
        cancelBtn.text("Cancel");
        cancelBtn.addClass("cancel-btn");

        rowVendorAndProduct.append(vendorName);
        rowVendorAndProduct.append(productName);
        rowDescription.append(productDescription);
        rowButton.append(eventSponsorshipBtn);
        rowButton.append(cancelBtn);

        sponsorArea.append(rowVendorAndProduct);
        sponsorArea.append(rowDescription);
        sponsorArea.append(rowButton);

        var cardDiv = $("#card-" + theNumberItself);
        cardDiv.append(sponsorArea);
    });

    $(document).on("click", ".event-sponsorship", function(event) {
        event.preventDefault();
        var vendorNameInput = $(".vendor-name-input").val().trim();
        var productNameInput = $(".product-name-input").val().trim();
        var productDescriptionInput = $(".product-description-input").val().trim();
        console.log("event sponsorship clicked");
        console.log(vendorNameInput);
        console.log(productNameInput);
        console.log(productDescriptionInput);

        addSponsorship(vendorNameInput, productNameInput, productDescriptionInput);

        $(".vendor-name-input").val("");
        $(".product-name-input").val("");
        $(".product-description-input").val("")
    });

    function addSponsorship(vendorNameInput, productNameInput, productDescriptionInput) {
        $.post("/api/products", {
            vendorName: vendorNameInput,
            productName: productNameInput,
            description: productDescriptionInput
        }).then(function(data) {
            console.log(data);
        });
    }

    $(document).on("click", ".cancel-btn", function(event) {
        console.log("cancelBtn");
        sponsorArea.hide();
    });
});