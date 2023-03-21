const { EmbedBuilder } = require('discord.js');

const db = require('../../models/votaciones');

module.exports = {
  name: "votaciones",
  alias: ["votes"],
  timeout: 2000,
  async execute(client, message, args) {

    const embed = new EmbedBuilder()
      .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() })
    
    db.findOne({ ID: message.guild.id }, async (err, data) => {
      if (err) throw err;
      if (data) {
        if (data.Content.length === 0) {
          embed.setDescription(`No hay votaciones`)
          embed.setColor("FF0000")
          return message.channel.send({ embeds: [embed] });
        }
        
        const embed1 = new EmbedBuilder()
        embed1.setDescription(`${data.Content.map(
          (w, i) => `•${i+1} **${w.User}**`
        ).join("\n")}`)
        embed1.setColor("a900ff")

        message.channel.send({ embeds: [embed1] }).catch((err) => {
          message.reply(`:x:| A ocurrido un error inesperado`)
        })
      } else {
        embed.setDescription(`No hay votaciones`)
        embed.setColor("FF0000")

        message.channel.send({ embeds: [embed] });
      }
    })

  }

} 