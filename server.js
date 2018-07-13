const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); //tales absolute path to folder you want to send

app.get('/', (req, res)=> {
res.render('home.hbs', {
  intro: 'Welcome',
  currentYear: new Date().getFullYear()
})
});
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/goodmusic', (req, res) => {
  res.send ({
    bands: ['Paramore',
            'Twenty One Pilots'],
      songs: [
        'Misery Business',
        'aint it fun'
      ]
  })
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});

//binds to machine

 //sets up handler for http get request
 // first argument is url
 // second is function that tells what to send back
 // request, response needs to be arguments for function
