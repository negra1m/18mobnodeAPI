const jwt = require('jsonwebtoken');
const { secret } = require('../config/default');

// Token Expiration Set to 12 hours
module.exports = (data, expiresIn = "12h") => 
    jwt.sign(
        data,
        secret,
        { expiresIn }
    );