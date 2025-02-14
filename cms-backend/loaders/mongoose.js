const mongoose = require("mongoose");
const config = require("../app/config");

module.exports = async () => {
  try {
    const connection = await mongoose.connect(config.dbConnection,
     {  useNewUrlParser: true, 
      useUnifiedTopology: true,
       serverSelectionTimeoutMS: 30000}
    );
    console.log(`Database connected to ${config.dbConnection}`);
    return connection.connection.db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;  // Rethrow or handle the error as needed
  }
};