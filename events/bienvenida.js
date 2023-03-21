const {
    EmbedBuilder,
    MessageAttachment,
    Guild
} = require('discord.js');
const client = require("../bot");

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {

      let canal = member.guild.channels.cache.get('894327979579154513');

      const embed = new EmbedBuilder()
      .setTitle("Bienvenido Viajero!!")
      .setDescription(`Bienvenid@ ${member}, ten una linda instancia en nuestro lindo y precioso y bien organizado y para nada sobre cargado servidor de Discord.\n\nTe invitamos a ir por tu rol de DND para jugar Dungeons & Dragons con nosotros :D`)
      .setColor('00FF00')
      .setImage('https://cdn.discordapp.com/attachments/399947163091730433/1086437867133345802/Banner_evento_DnD.jpeg')
      .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}`);

      canal.send({ content: `${member}`, embeds: [embed] });

      member.roles.add('727690995700858900')
      
    },
};