const { EmbedBuilder } = require('discord.js');

module.exports = { 
  name: "embed", //!nombre 
  alias: [],
  timeout: 2000,
  async execute(client, message, args) {

    const embed = new EmbedBuilder()
    .setColor('35FFEF')
    .setTitle('Misiones completadas')
    .setDescription('Registro de misiones completadas')
    .setFields(
      { name: '6 Misiones', value: 'Plimplus☆', inline: true },
      { name: '5 Misiones', value: 'Orion☆, Klaude☆', inline: true },
      { name: '4 Misiones', value: '----------------', inline: true },
      { name: '3 Misiones', value: 'Ahriel, Sebas☆, Barbatos☆', inline: true },
      //{ name: '\n', value: '\n', inline: true },
      { name: '2 Misiones', value: 'Bastion, Rafhus, Hunter☆, Timoty☆, Alucard☆, Moxy☆, Garlant☆', inline: true },
      { name: '1 Misiones', value: 'Zoca, Bjorn, Kurumi, Takehiko, Albert☆, Lelouch', inline: true }
    )
    .setImage('https://media.discordapp.net/attachments/970718000254705708/1071516921477992538/Anuncios.jpeg')
    .setTimestamp()
    .setFooter({ text: 'Ultima actualización:' });

    message.channel.send({ embeds: [embed] });

    message.delete();
    
  }

} 