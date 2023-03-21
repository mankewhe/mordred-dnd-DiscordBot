const {
  SlashCommandBuilder,
  EmbedBuilder
} = require('discord.js');


const client = require("../bot");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('prefix')
    .setDescription('Te digo mi prefijo definido en este servidor.'),
  async execute(interaction) {

    const prefix = process.env.prefix;

    interaction.reply(`El prefijo que tengo definido en **${interaction.guild.name}** es **${prefix}**`);

  },
};