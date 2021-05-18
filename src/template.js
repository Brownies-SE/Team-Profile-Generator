const template = (card) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <title>Team-Profile</title>
    </head>
    <body>
      <div class="jumbotron text-center">
        <h1>My Team</h1>
      </div>
      <div class="container">
        <div class="row">${card}</div>
      </div>
    </body>
  </html>
  `;
};

module.exports = template;
