import express from "express";
import path from "path";

import React from 'react'
import {renderToString} from "react-dom/server";
import {StaticRouter} from 'react-router-dom';

import Layout from "../src/main/Layout";

const app = express();


// todo app SSR setting START :: ==============
app.use(express.static("src "));
app.get("*", (req, res) => {

  const context = {};
  const reactHeaderComponent = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Layout/>
      </StaticRouter>
  );

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(
    `<!DOCTYPE html>
    <html>
      <head>
        <title>SSR PROJECT</title>
        <meta charset="utf-8" />
      </head>
      <body>
        <div>React SSR</div>
         ${reactHeaderComponent}
      </body>
    </html>`
  )

});
// todo app SSR setting END :: ================


app.listen(8080, () => {
  console.log('Running on http://localhost:8080/');
});


