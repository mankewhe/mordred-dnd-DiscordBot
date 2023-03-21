const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "embed", 
  alias: [],
  timeout: 2000, 
async execute (client, message, args){
  
      let embed = new EmbedBuilder()
      .setTitle('**⋆⋅⋅⋅⊱∘─── · • ROLES • · ───∘⊰⋅⋅⋅⋆**')
      .setDescription(`Reacciona al emoji correspondiente para obtener tu rol!!\n\n🎲 DND\n🧊 Minecraft\n🤓 Informatico`)
      .setColor("a900ff")
  
      message.channel.send({ embeds: [embed] });
  }

}