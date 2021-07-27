const jwt = require('jsonwebtoken')



const jwtMiddleware = {
  
  JWT_SIGN_SECRET : 'fF3q^bZX2xJY^Uk%rmKv#ity82y5eBfGEWu',

  generateToken: (user)=>{
    return jwt.sign({
      userId: user.id,
      userName: user.name
    },
    jwtMiddleware.JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  },

}

module.exports = jwtMiddleware;

