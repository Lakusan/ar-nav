const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//token
// module.exports = function (req, res, next) {
//     const token = req.header('auth-token');
//     if(!token) return res.status(401).send('Access Denied');

//     try {
//         const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//         req.user = verified;
//         next();
//     } catch(err) {
//         res.status(400).send('Invalid Token');
//     }      
// }

//Cookie

module.exports = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
    try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = {
      id: decrypt.id,
      firstname: decrypt.firstname,
    };
    next();
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

