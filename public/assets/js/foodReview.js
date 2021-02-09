$.ajax("/api/members", {
  type: "GET",
  // data: newReview
}).then(function (data) {
  console.log(data);
  // Reload the page to get the updated list
  // location.reload();
});

$(document).ready(function () {
$('.search-icon').on('click', function (event) {
	event.preventDefault()
	let searchTerm = $('.search-input').val().trim()
	console.log("testingggg",searchTerm);
	fetch(`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=37.786882&longitude=-122.3999721`, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'authorization': 'Bearer fsKdcEujDDbI3J_tzmwHmcRA-Z_H6nfnCEMawFDdwdv3CFxiI7hozxAkbX69fPUoG0aU0x6ZwFksGZ98d4E2afBc38WyqJwvgfWkLJeG9lHxIh7lolLM2VBVK6scYHYx',
			'Cache-Control': 'no-cache'
		},
	})
		.then(response => response.json())
		.then(result => {
			console.log(result)
			setData(result)
		})
})
})


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
    let id = $(this).attr("data-id");
    // let tempText = "review some restaurants";
    // let reviewUpdate = $(this).attr("reviewUpdate");
    console.log(id);
    // Send the PUT request.
    $.ajax("/api/review/" + id, {
      type: "PUT",
      data: { isEditing: true, id: id },
    }).then(function (data) {
      console.log(data);
    });
  });

  $(".save-review").on("click", function () {
    let id = $(this).attr("data-id");
    let newBodyInput = $(".review-text");

    
    // let tempText = "review some restaurants";
    // let reviewUpdate = $(this).attr("reviewUpdate");
    console.log(id);
    // Send the PUT request.
    $.ajax("/api/review/" + id, {
      type: "PUT",
      data: { isEditing: false, id: id },
    }).then(function (data) {
      console.log(data);
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
