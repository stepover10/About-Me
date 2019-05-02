import express from "express";
import path from "path";

import React from 'react'
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { StaticRouter } from 'react-router-dom';

import Layout from "../src/main/Layout";

const stats = require('../dist/react-loadable.json');
const app = express();

app.use(express.static("../dist"));

// todo app SSR setting START :: ==============
app.get("*", (req, res) => {

  const modules = [];
  const context = {};
  const reactHeaderComponent = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        <Layout />
      </StaticRouter>
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);
  let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`
    <!doctype html>
    <html>
      <head>...</head>
      <body>        
        <div id="app">${reactHeaderComponent}</div>        
        ${scripts.map(script => {
            return `<script src="${script.file}"></script>`
        }).join('\n')}
      </body>
    </html>
  `);

});
// todo app SSR setting END :: ================


// app.listen(8080, () => { console.log('Running on http://localhost:8080/'); });

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
}).catch(err => {
  console.log(err);
});



