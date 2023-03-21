const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');

//const { registerFont } = require('canvas');
//registerFont('./font/Seagram_tfb.ttf', { family: 'Seagram' } );

require('dotenv').config();

// Client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

module.exports = client;

// Deploy Slash Commands
// require('./deploy-commands');

// Configs
require('./configs/db');

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

// Slash Commands Handler
const slashCommandsPath = path.join(__dirname, 'slashCommands');
const slashCommandFiles = fs.readdirSync(slashCommandsPath).filter(file => file.endsWith('.js'));

for (const file of slashCommandFiles) {
  const filePath = path.join(slashCommandsPath, file);
  const command = require(filePath);

  if ('data' in command && 'execute' in command) {
    client.slashCommands.set(command.data.name, command);
  } else {
    console.log(`[WARNING] The command at ${filePath} is missing a require "data" or "execute" property.`);
  }
}

// Events Handler
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Login del bot
client.login(process.env.token);