import jwt from "jsonwebtoken";

export const verifyToken = async function (req, res, next) {
  try {
    const token =
      req.cookies.UserAuth || req.headers["authorization"].split("=")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login to access user information",
      });
    }
    const publicKey = process.env.SECRET_TOKEN;

    if (!publicKey) {
      return res.status(500).json({
        success: false,
        message: "Server error: Public key not provided",
      });
    }

    const decodedToken = jwt.verify(token, publicKey);

    req.body.email = decodedToken.email;

    next();
  } catch (error) {
    console.log("Verification Token Error: " + error.message);
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or expired token",
    });
  }
};
