const jwt = require("jsonwebtoken");

// Secret key for JWT signing (Use an environment variable in production)
const JWT_SECRET = process.env.AUTH_SECRET;  // Change this in production

// Function to create JWT for a user
const createTokenForUser = (user) => {
  // Sign the token with the user’s id and email, and set expiration time (e.g., 1 hour)
  return jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "11h" }
  );
};

// Middleware to protect routes (verify JWT)
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];  // Retrieve token from cookie or header

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token." });
    }
    req.user = user;  // Attach the user object to the request
    next();  // Proceed to the next middleware or route handler
  });
};

module.exports = { createTokenForUser, authenticateJWT };
