import express from 'express';
import request from 'request';

const app = express();

// Serve application file depending on environment
app.get('/app.js', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/app.js');
  } else {
    res.redirect('//localhost:9090/build/app.js');
  }
});

app.get('/api/artists', (req, res) => {
    var url = "http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=";
    var queryOptions = "&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US";
    var query = url + req.query.title + queryOptions;
    var options = { uri: query, 'Content-Type': 'application/json;charset=UTF-8'};
    request.get(options, (error, response, body) => {
              // DO: Add Error handling
              var body = JSON.parse(body);
              var artists = body.artists;
              if (Array.isArray(artists)) {
                artists = artists.slice(0,6);
              }
              res.send({artists: artists});
          })
})


// Serve aggregate stylesheet depending on environment
app.get('/style.css', (req, res) => {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/style.css');
  } else {
    res.redirect('//localhost:9090/build/style.css');
  }
});

// Serve index page
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});



if (!process.env.PRODUCTION) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    }
  });
}


/******************
 *
 * Express server
 *
 *****************/

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Listening at:', port);
});
