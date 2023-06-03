

/*********************************************************************************
* WEB322 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Jason Kvitaishvili Student ID: ______________ Date: 6/2/2023
*
* Cyclic Web App URL: ________________________________________________________
*
* GitHub Repository URL: ______________________________________________________
*
********************************************************************************/ 















const express = require('express');
//express

const blogService = require('./blog-service');
//require blog service js

const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => 
{
  //app.get
    res.redirect('/about');
  });
  
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
  });




  app.get('/blog', (req, res) => 
  //app.get /blog
  {
    blogService.getPublishedPosts()
      .then(posts => {
        res.json(posts);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
  
  app.get('/posts', (req, res) => 
  //app.get/posts
  {
    blogService.getAllPosts()
    //blogserver
      .then(posts => {
        res.json(posts);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
  
  app.get('/categories', (req, res) =>
  //categories
  
  {
    blogService.getCategories()
      .then(categories => {
        res.json(categories);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
  
  //handle pag e 404 not found
  app.use((req, res) => {
    res.status(404).send('Page Not Found');
  });
  
 
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
    //app/listen to posrt
  });