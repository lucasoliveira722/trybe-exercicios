const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const verifyPost = arrayPosts
    .filter((post) => post.id === parseInt(id));

  if (!verifyPost) {
    res.status(404).json({ "message": "post not found" })
  }

  return res.status(200).json(verifyPost)
});

app.get('/posts', (req, res) => {
  const posts = req.body;
  if(!posts) return res.status(200).json({ "posts":[] })
  return res.status(200).json(posts);
});