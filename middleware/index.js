import jwt from "jsonwebtoken";

export const verifyTokenMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      console.log("token not found");
      return res.status(400).json({
        message: "UnAuth User",
        status: false,
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // Save the user's email in the request object
    req.userEmail = decoded.email;
    
    next();
  } catch (err) {
    console.log(err)
    res.status(401).json("unAuth User");
  }
};