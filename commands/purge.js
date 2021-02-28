require('dotenv').config();
const Discord = require('discord.js');
var PURGEPERMS = process.env.PURGEPERMS;
if (!PURGEPERMS) PURGEPERMS = "ADMINISTRATOR";
else if (PURGEPERMS !== 'ADMINISTRATOR' && PURGEPERMS !== 'MANAGE_MESSAGES') PURGEPERMS = "ADMINISTRATOR";
module.exports = {
    name: 'purge',
    description: 'deletes messages',
    execute(msg, args) {
        const executioner = msg.guild.members.resolve(msg.author);
        if (!(executioner.hasPermission(`${ PURGEPERMS }`))) return;
        msg.delete().then( () => {
            const messagecount = parseInt(args[0]);
            msg.channel.messages.fetch({ limit: messagecount }).then(messages => msg.channel.bulkDelete(messages));
        }).then(() => {
            msg.channel.send(`Deleted ${ args[0] } messages. (This message deletes after 5 seconds).`).then(msg => msg.delete( {timeout: 5000 } ));
        })
    }
}