// Connect to yelp fusion api
const yelp = require("yelp-fusion");
// API key
const apiKey = "RVGWldmef-r-7q5KpPp4YA9UaK-49yg6m1nHH8_xSLU7FSoSkyi8NdaoJiAmkqZpCxG7nQ6zQm0X5iccIFq3jx0ftANA9tuN3b0qz593n7D0PRjCwbWGVZc4FHgMYHYx";
// Need to pass in term and location from front end
const searchRequest = {
  term: "Hola Arepa",
  location: "Minneapolis, MN"
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
//Grab first result
  const firstResult = response.jsonBody.businesses[0];
  //const prettyJson = JSON.stringify(firstResult, null, 4);
  //console.log(prettyJson);
  //Get name and rating for search term
  const rating = firstResult.rating;
  const name = firstResult.name;
}).catch(err => {
  console.log(err);
});

// Send name and rating to front end