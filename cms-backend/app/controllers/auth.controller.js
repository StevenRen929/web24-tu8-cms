const authServices = require("../services/auth.service");

exports.register = async (req, res) => {
  try {
    const result = await authServices.register(req);
    res.send(result);
  } catch (e) {
    return e;
  }
};

exports.login = async (req, res) => {
  try {
    const { user, jwt_token } = await authServices.login(req);
    if (user) {
      console.log(user);
      res.status(200).send({ user, jwt_token }); // 返回用户信息和 token
    } else {
      res.status(400).send({ error: "Invalid credentials!" });
    }
  } catch (e) {
    res.status(500).send({ error: e.message || "Internal server error" });
  }
};

exports.showMe = async (req, res) => {
  const result = authServices.userMe(req);
  res.send(result);
};
