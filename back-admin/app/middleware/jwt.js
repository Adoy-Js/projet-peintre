const jwt = require('jsonwebtoken')

const JWT_SIGN_SECRET = 'fF3q^bZX2xJY^Uk%rmKv#ity82y5eBfGEWu';

const jwtMiddleware = {

  generateToken: (user)=>{
    return jwt.sign({
      userId: user.id,
      userName: user.name
    },
    JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  },

}

module.exports = jwtMiddleware;

