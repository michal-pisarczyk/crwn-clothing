const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const enforce = require("express-sslify");
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/service-worker.js", (request, response) => {
  response.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (request, response) => {
  const body = {
    source: request.body.token.id,
    amount: request.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      response.status(500).send({ error: stripeError });
    } else {
      response.status(200).send({ success: stripeResponse });
    }
  });
});
