module.exports = {
  name: "ping",
  aliases: ["latencia", "ms"],
  descripcion: "Muestra la latencia del BOT",
  run: async (client, message, args, prefix) => {
    message.reply(`Pong! El ping del Bot es de ${client.ws.ping}ms`);
  },
};
