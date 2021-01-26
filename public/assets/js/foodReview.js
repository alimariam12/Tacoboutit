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
  console.log("clicked bby!!");
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
  $(".editReview").on("click", function (event) {
    let id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newMealState,
    });

    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post,
      }).then(function () {
        window.location.href = "/blog";
      });
    }
    updatePost();
  });

  $(".deleteReview").on("click", function (event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/review/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted review", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
