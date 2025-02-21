const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const authType = authHeader?.split(" ")[0];
  const authToken = authHeader?.split(" ")[1];

  if (!authType || !authToken) {
    return res.status(401).json({ message: "Invalid token" });
  }
  if (authType !== "Bearer") {
    return res.status(401).json({ message: "Invalid token" });
  }

  //should be process.env.JWT_SECRET
  //but my .env doesnt work use "SECRET" instead
  jwt.verify(authToken, "SECRET", async (err, d) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const resultUser = await User.findOne({ _id: d.id, token: authToken });
    if (!resultUser) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.headers.userId = resultUser._id;
    return next();
  });
};



// token used to test authguard middleware
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjZlZjExYWViZGM1ZjllODU4YmIyNyIsImlhdCI6MTc0MDA0MjE5NH0.TMC9uvPGGPHKUKdA-VkF0lv0GUaI7iCdKdwjburOFnk"
    