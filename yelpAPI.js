const yelp = require("yelp-fusion");

const apiKey = "RVGWldmef-r-7q5KpPp4YA9UaK-49yg6m1nHH8_xSLU7FSoSkyi8NdaoJiAmkqZpCxG7nQ6zQm0X5iccIFq3jx0ftANA9tuN3b0qz593n7D0PRjCwbWGVZc4FHgMYHYx";

const searchRequest = {
  term: "Hola Arepa",
  location: "Minneapolis, MN"
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(err => {
  console.log(err);
});