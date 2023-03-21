const {
    EmbedBuilder,
    Collection,
    Guild
} = require('discord.js');
const client = require("../bot");

const db = require('../models/votaciones');

// Configs
const prefix = process.env.prefix; // prefix = *

module.exports = {
    name: 'messageCreate',
    async execute(message) {

      if(message.content == '+1') {
        message.reply("+1 Voto")

      db.findOne({ ID: message.guild.id }, async (err, data) => {
      if (err) throw err;
      if (!data) {
        data = new db({
          ID: message.guild.id,
          Content: [
            {
              User: message.author.tag
            }
          ],
        })
      } else {
        const obj = {
          User: message.author.tag
        }
        data.Content.push(obj)
      }
      data.save()
    });
      }

    },
};