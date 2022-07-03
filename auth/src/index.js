const express = require("express");
const axios = require("axios");
const { connectDb } = require("./helpers/db");
const { port, host, db, apiUrl } = require("./config");
const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`started auth service on port: ${port}`);
    console.log(`started auth service on host: ${host}`);
    console.log(`link auth service: ${host}:${port}`);
    console.log(`apiUrl auth service: ${apiUrl}`);
    console.log(`Our DB: ${db}`);

  })
}

app.get("/test", (req, res) => {
  res.send('out api servcer!');
});

app.get("/api/testwithapidata", (req, res) => {
  axios.get(apiUrl + "/testapidata").then(response => {
    res.json({
      testapidata: response.data
    });
  })
});


app.get("/api/currentUser", (req, res) => {
  res.json({
    id: "1234",
    email: "foo@gmail.com"
  });
});

connectDb()
  .on('error', console.error)
  .on('disconnected', connectDb)
  .once('open', startServer);