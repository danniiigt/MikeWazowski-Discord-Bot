const mongoose = require("mongoose");
require("dotenv").config();

module.exports = (client) => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(`Error al conectar a la DB`.bgRed);
      console.log(err);
    });

  console.log(`\n ${client.user.tag} ON `.bgGreen);
};
