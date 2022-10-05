const tokens = require("../config/token");


function validateUser(req, res, next) {

  const token = req.headers.token;
  
 
  if (!token) return res.statusCode(401);

  const { user } = tokens.validateToken(token);
  if (!token) return res.statusCode(401);

  req.user = user;

  next();
}

module.exports = { validateUser };