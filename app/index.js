const express = require('express');
const app = express();

const template = (timestamp) => (`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello!</title>
  </head>
  <body>
    <section>
        <h1>This is section 1</h1>
        <p>Cached at: ${timestamp}
    </section>
    <esi:include src="/esi"/>
    <section>
        <h1> This is section 3</h3>
        <p>Cached at: ${timestamp}
    </section>
  </body>
</html>`);

const partial = (timestamp) => (`<section>
    <h1> This is section 2</h1>
    <p>Cached at: ${timestamp}
</section>`);

app.get('/', (req, res) => {
    console.log('Main template called');
    res.send(template(Date.now()));
});

app.get('/esi', (req, res) => {
    console.log('Partial called');
    res.send(partial(Date.now()));
})

app.listen(3333);
