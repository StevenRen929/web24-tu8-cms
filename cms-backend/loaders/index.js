const expressLoader = require("./express"); // 确保路径正确，加载 express 配置文件
const mongooseLoader = require("./mongoose"); // 加载 mongoose 配置文件

exports.init = () => {
  expressLoader();
  mongooseLoader();
};
