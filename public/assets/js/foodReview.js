$("#create-review").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
console.log("clicked bby!!");
const loginForm = $("#logMeIn");
const titleInput = $("input#nameNine");
const bodyInput = $("textarea#messageNine");

    let newReview = {
      title: titleInput.val(),
      body: bodyInput.val()
    };
    console.log(newReview);
    // Send the POST request.
    $.ajax("/api/review", {
      type: "POST",
      data: newReview
    }).then(
      function(data) {
        console.log("created new review bby");
        // Reload the page to get the updated list
        location.reload();
      })

      // $.ajax("/api/review", {
      //   type: "POST",
      //   data: newReview
      // }).then(
      //   function() {
      //     console.log("created new review");
      //     // Reload the page to get the updated list
      //     location.reload();
      //   }
      // );
    });
    