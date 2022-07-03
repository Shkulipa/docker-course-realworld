const express = require("express");
const mongoose = require("mongoose");
const axios = require('axios');
const { connectDb } = require("./helpers/db");
const { port, host, db, authApiUrl } = require("./config");
const app = express();

const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model("Post", postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`started on port: ${port}`);
    console.log(`started on host: ${host}`);
    console.log(`link: ${host}:${port}`);
    console.log(`Our DB: ${db}`);

    /* Post.find((err, posts) => {
      if(err) return console.error(err);
      console.log("posts", posts);
    }) */

    const silence = new Post({ name: "silence" });
    silence.save((err, savedSilence) => {
      if(err) return console.error(err);
      console.log("savedSilence with volumes", silence);
    })

  })
}

app.get("/test", (req, res) => {
  res.send('work!');
});

app.get("/api/testapidata", (req, res) => {
  res.json({
    testapidata: true,
  });
});

app.get("/testwithcurrentuser", (req, res) => {
  axios.get(authApiUrl + "/currentUser").then(response => {
    res.json({
      testwithcurrentuser: true,
      currentUserFromAuth: response.data
    });
  })
});

connectDb()
  .on('error', console.error)
  .on('disconnected', connectDb)
  .once('open', startServer);