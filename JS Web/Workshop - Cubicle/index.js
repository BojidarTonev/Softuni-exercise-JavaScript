const dbConnector = require("./config/database");

dbConnector().then(() => {
  const config = require("./config/config");
  const app = require("express")();

  require("./config/express")(app);
  require("./config/routes")(app);

  app.use(function(err, req, res, next) {
    console.log(err);
    res.render('500', {errorMessage:  err.message });
  });

  app.listen(
    config.port,
    console.log(`Listening on port ${config.port}! Now its up to you...`)
  );
}).catch(console.error);
