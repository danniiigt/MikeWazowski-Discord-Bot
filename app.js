const Discord = require("discord.js");
require("dotenv").config();
require("colors");

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

console.clear();
console.log(" Created by @danniiigt \n".bgBlue);
const requerirHandlers = () => {
  ["command", "events", "distube"].forEach((handler) => {
    try {
      require(`./handlers/${handler}`)(client, Discord);
    } catch (error) {
      console.warn(error);
    }
  });
};

requerirHandlers();
client.login(process.env.BOT_TOKEN);
