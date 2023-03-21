const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "test", 
  alias: [],
  timeout: 2000, 
async execute (client, message, args){

if (message.author.id !== '379347892479066123') return;

      let embed = new EmbedBuilder()
      .setDescription("Simulando Entrada al Servidor " + message.author.username)
      .setColor("a900ff")
      message.channel.send({ embeds: [embed] });
  
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );

  }

}