var whitelist = {
  "/": true,
  "/signin": true,
  "/signup": true
}

module.exports = function(req, res, next) {
  
  if(whitelist[req.url]) {
    console.log("whitelist url: ", req.url);
    return next();
  }

  if(req.session && req.session.user && req.session.user.id) {
    return next();
  }
  res.status(401).send("not authenticated");
}
