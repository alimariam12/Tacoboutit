$.ajax("/api/members", {
  type: "GET",
  // data: newReview
}).then(function (data) {
  console.log(data);
  // Reload the page to get the updated list
  // location.reload();
});

$("#create-review").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  const titleInput = $("input#nameNine");
  const bodyInput = $("textarea#messageNine");

  let newReview = {
    title: titleInput.val(),
    body: bodyInput.val(),
  };

  console.log(newReview);
  $.ajax("/api/review", {
    type: "POST",
    data: newReview,
  }).then(function () {
    console.log("created new review bby");
    // Reload the page to get the updated list
    location.reload();
  });
});
$(document).ready(function () {
  $(".edit-review").on("click", function () {
    let id = $(this).data("id");
    let reviewUpdate = $(this).data("reviewUpdate");
    // Send the PUT request.
    $.ajax("/api/review/" + id, {
      type: "PUT",
      data: reviewUpdate,
    }).then(function(){
      console.log("hello");
    });
  });

  $(".delete-review").on("click", function () {
    let id = $(this).data("id");

    //Send the DELETE request.
    $.ajax("/api/review/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted review", id);
      //Reload the page to get the updated list
      location.reload();
    });
  });
});
