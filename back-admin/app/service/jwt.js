const jwt = require('jsonwebtoken')

const jwtMiddleware = {
  

  generateToken: (user)=>{
    return jwt.sign({
      userId: user.id,
      userName: user.name
    },
    process.env.JWT_SIGN_SECRET,
    {
      expiresIn: '1h'
    })
  },

}

module.exports = jwtMiddleware;