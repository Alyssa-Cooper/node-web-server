const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public')); //tales absolute path to folder you want to send

app. get('/', (req, res)=> {
// res.send('<h1> Hello Express!</h1>');
res.send ({
  name: 'Alyssa',
    likes: [
      'Biking',
      'Hiking'
    ]
})
});
app.get('/about', (req, res) => {
  res.send('About Page');
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
