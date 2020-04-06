const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('Authorization').split('Bearer ')[1];
  if(!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoced = jwt.verify(token, 'secret');
    req.user = decoced.user;
    next();
  } catch(e) {
    res.status(500).send({ message: "Invalid token" });
  }
};
