const servidor = require(`${process.cwd()}/modelos/servidor.js`);

module.exports = {
  name: "prefix",
  aliases: ["prefijo", "cambiarprefijo"],
  descripcion: "Cambia el prefijo que usa el BOT",
  run: async (client, message, args, prefix) => {
    if (!args[0])
      return message.reply(
        `Tienes que especificar el nuevo prefix para el BOT!`
      );

    await servidor.findOneAndUpdate(
      { guildID: message.guild.id },
      {
        prefijo: args[0],
      }
    );

    return message.reply(`Se ha cambiado el prefijo de ${prefix} a ${args[0]}`);
  },
};
