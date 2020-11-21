const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
// middleware
app.use(bodyParser.json()); 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

const blogs = [
  {
    title : 'title',
    text: 'first blog'
  }
]

app.get('/blogs/all', function(req, res){
  res.send(blogs);
});

app.get('/blogs/:id', function(req,res){
  const id = parseInt(req.params.id);
  if(id > blogs.length || id < 0){
    res.status(400);
    res.send('Invalid ID');
  }else{
    res.send(blogs[id]);
  }
})

app.post('/blogs/new', function(req, res){
  const body = req.body;
  if (body.title && body.text){
    blogs.push(body);
    const id = blogs.length - 1;
    res.json({id});
  }else{
    res.status(400);
    res.send('Invalid Blog. Each blog must have a title and a text field');
  }
})


/* istanbul ignore next */
if (!module.parent) {
  app.listen(3333);
  console.log('Express started on port 3333');
}