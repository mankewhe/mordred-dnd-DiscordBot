const { Events } = require('discord.js'); // Events
const { ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);

        function presence(){
            client.user.setActivity("DnD", {
                type: ActivityType.Playing
            });
        };
        
        presence();
    },
};