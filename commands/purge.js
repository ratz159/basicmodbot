const Discord = require('discord.js');

module.exports = {
    name: 'purge',
    description: 'deletes messages',
    execute(msg, args) {
        const executioner = msg.guild.members.resolve(msg.author);
        if (!(executioner.hasPermission('MANAGE_MESSAGES'))) return;
        msg.delete().then( () => {
            const messagecount = parseInt(args[0]);
            msg.channel.messages.fetch({ limit: messagecount }).then(messages => msg.channel.bulkDelete(messages));
        }).then(() => {
            msg.channel.send(`Deleted ${ args[0] } messages. (This message deletes after 5 seconds).`).then(msg => msg.delete( {timeout: 5000 } ));
        })
    }
}