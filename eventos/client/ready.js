const mongoose = require("mongoose");
require("dotenv").config();

module.exports = (client) => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Contectado a la base de datos MongoDB`.blue);
    })
    .catch((err) => {
      console.log(`Error al conectar a la DB`.bgRed);
      console.log(err);
    });

  console.log(`Conectado como ${client.user.tag}`.green);
};
