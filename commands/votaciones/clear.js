const { EmbedBuilder } = require('discord.js');

const db = require('../../models/votaciones');

module.exports = {
  name: "clear",
  timeout: 2000,
  async execute(client, message, args) {

    const embed = new EmbedBuilder();

    db.findOne({ ID: message.guild.id}, async (err, data) => {
      if (err) throw err;
      if (data) {
        await db.findOneAndDelete({ ID: message.guild.id });
        embed.setDescription(`Se han eliminado todas las votaciones del servidor`)
        embed.setColor("00FF00")
        message.channel.send({ embeds: [embed] })
      } else {
        embed.setDescription(`El servidor no tiene votaciones`)
        embed.setColor("FF0000")

        message.channel.send({ embeds: [embed] });
      }
    })

  }

} 