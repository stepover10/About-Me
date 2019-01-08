module.exports = (app) => {

  app.get("/*", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end( htmlTemplate() );
  });

  function htmlTemplate() {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app"></div>
            <script src="/index/index.js"></script>
        </body>
        </html>
  `;
  }


}