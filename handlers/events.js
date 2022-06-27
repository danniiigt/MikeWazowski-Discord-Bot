const fs = require("fs");
require("colors");
const allEvents = [];

module.exports = async (client) => {
  try {
    try {
      console.log(`Cargando los eventos...`.yellow);
    } catch (error) {}

    let cantidad = 0;
    const cargar_dir = (dir) => {
      const archivos_eventos = fs
        .readdirSync(`./eventos/${dir}`)
        .filter((file) => file.endsWith(".js"));

      archivos_eventos.forEach((archivo) => {
        try {
          const evento = require(`../eventos/${dir}/${archivo}`);
          const nombre_evento = archivo.split(".")[0];
          allEvents.push(nombre_evento);
          client.on(nombre_evento, evento.bind(null, client));
          cantidad++;
        } catch (error) {
          console.log(error);
        }
      });
    };

    await ["client", "guild"].forEach((e) => cargar_dir(e));
    console.log(`${cantidad} Eventos cargados`.bgGreen);

    try {
      console.log(`Iniciando sesion en el Bot...`.yellow);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
