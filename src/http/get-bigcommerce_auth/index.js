require('dotenv').config();
const arc = require('@architect/functions');
const BigCommerce = require('node-bigcommerce');


const bigCommerce = new BigCommerce({
  logLevel: "debug",
  clientId: process.env.BC_CLIENT_ID,
  secret: process.env.BC_CLIENT_SECRET,
  callback: process.env.BC_AUTH_CALLBACK,
  responseType: "json",
  apiVersion: "v3"
});


let html = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
  </head>
  <body>
    <h1 class="center-text">
      Hello world!
    </h1>
    <p class="center-text">
      Your new route is ready to go!
    </p>
    <p class="center-text">
      Learn more about building <a href="https://docs.begin.com/en/functions/http/" class="link" target="_blank">Begin HTTP functions here</a>.
    </p>
  </body>
</html>
`

// HTTP function
exports.handler = async function http(req, res) {

  bigCommerce.authorize(req.query)
  .then(data => res.render('integrations/auth', { title: 'Authorized!', data: data }))

  try {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'text/html; charset=utf8',
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'Location': process.env.APP_URL
      },
      body: html
    }
  } catch (err) {
      console.log(`Error: ${JSON.stringify(err)}`)
      return {
          statusCode: 500,
          body: "Error Installing App"
      }
  }
}