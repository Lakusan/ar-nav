// const jwt = require('jsonwebtoken');

//token
// module.exports = function (req, res, next) {
//     const token = req.header('auth-token');
//     if(!token) return res.status(401).send('Access Denied');

//     try {
//         const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//         req.user= verified;
//         next();
//     } catch(err) {
//         res.status(400).send('Invalid Token');
//     }      
// }
//cookie standalone -> depreached -> changed to Express Session
    // module.exports = async (req, res, next) => {
    //     const token = req.cookies.token || 'Cookie';
    //     try {
    //       if (!token) {
    //         return res.status(401).json('You need to Login')
    //       }
    //       const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
    //       req.user = {
    //         _id: decrypt._id,      
    //       };
    //       next();
    //     } catch (err) {
    //       return res.status(500).json(err.toString());
    //     }
    //   };