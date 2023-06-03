const fs = require('fs');
//const fs require
const path = require('path');
//const path require
const dataFolderPath = path.join(__dirname, 'data');
//data folder
const postsFilePath = path.join(dataFolderPath, 'posts.json');
//posts json
const categoriesFilePath = path.join(dataFolderPath, 'categories.json');

let posts = [];
//let posts
let categories = [];
///let categories
function initialize()
//initialize function
 {
  return new Promise((resolve, reject) =>
   {
    fs.readFile(postsFilePath, 'utf8', (err, postsData) => {
      if (err) {
        reject('Unable to read posts');
      } else {
        posts = JSON.parse(postsData);
        fs.readFile(categoriesFilePath, 'utf8', (err, categoriesData) => 
        {
          if (err)
          //if statment
           {
            reject('Unable to read categories');
            //reject
          } else {
            categories = JSON.parse(categoriesData);
            resolve();
          }
        });
      }
    });
  });
}

function getAllPosts() 
//getAllpOSTS fUnction
{
  return new Promise((resolve, reject) => {
    if (posts.length === 0) {
      reject('No results returned');
    } else {
      resolve(posts);
    }
  });
}

function getPublishedPosts() 
//getPublishedPosts
{
  return new Promise((resolve, reject) => 
  {
    const publishedPosts = posts.filter(post => post.published);

    if (publishedPosts.length === 0)
     {
      reject('No results returned');
    } else {
      resolve(publishedPosts);
    }
  });
}

function getCategories() 
//get categories function
{
  return new Promise((resolve, reject) =>
  //return
   {
    if (categories.length === 0)
    //if statmente
     {
      reject('No results returned');

    } else 
    //else
    {

      resolve(categories);
    }
  });
}

module.exports = 
//moudle exports
{
  initialize,
  getAllPosts,
  getPublishedPosts,
  getCategories
};
