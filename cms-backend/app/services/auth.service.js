const User = require("../model/user");

exports.register = async (req, res) => {
  const result = new User(req.body);
  await result.save();
  return result;
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    //console.log(user);
    if(user){
    const jwt_token = await user.generateAuthToken();
    console.log(jwt_token)
    return { user, jwt_token };
    }else if(!user){
      return {message:"invalid auth!"}
    }
   
  } catch (e) {
    console.log(e);
  }
};
exports.userMe = async (req, res) => {
  return {};
};
