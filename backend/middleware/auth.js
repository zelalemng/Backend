const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const fetchuser =(req, res, next)=>{
    // to convert auth token into user details
    const token = req.header('auth-token');
    console.log(token);
    if(!token){
        console.log("if")
        return res.status(401).send({error:"Please authenticate using adfs valid token"})
    }
    try{
        console.log("try")
        console.log(token);
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user= data.user;
        next()
    }catch(error){
        console.log("catch")
       return res.status(401).send({error:"Please authenticate using a valid token"})
    }
}

module.exports = fetchuser;
/**
 * Protect Route Middleware - Helper to protect routes based on login status
 const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = {
  protect,
};
**/
