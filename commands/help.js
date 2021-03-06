const Discord = require('discord.js');
require('dotenv').config();
const PREFIX = process.env.PREFIX;
const BOTNAME = process.env.BOTNAME;
var PURGEPERMS = process.env.PURGEPERMS;
const PFPURL = process.env.PFPURL;
switch (PURGEPERMS) {
    case 'MANAGE_MESSAGES':
        PURGEPERMS = 'manage message permissions';
        break;
    default:
        PURGEPERMS = 'administrator permissions';
}
module.exports = {
    name: 'help',
    desciption: 'Returns a help message',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${ BOTNAME }`, `${ PFPURL }`)
            .setColor('#800000')
            .setTitle('Command List')
            .setDescription('Note: At the moment commands require a user to be mentioned. I am working on this the best I can to accept IDs as well.')
            .addFields(
                { name: `${ PREFIX }kick <user> <reason>`, value: 'Kicks a user. (Requires kick perms).'},
                { name: `${ PREFIX }ban <user> <reason>`, value: 'Bans a user. (Requires ban perms).'},
                { name: `${ PREFIX }setnick <user> <new name>`, value: 'Changes a users nickname. (Requires manage nickname perms).'},
                { name: `${ PREFIX }unban <user> <reason>`, value: 'Unbans a member. (Requires admin perms).'},
                { name: `${ PREFIX }help`, value: 'Displays this message.'},
                { name: `${ PREFIX }purge <no.> (or ${ PREFIX }clear <no.>)`, value:`Clears a set amount of messages. (Requires ${ PURGEPERMS }).`}
            )
            .setTimestamp()
            .setFooter('BasicModBot by 𝔇𝔞𝔯𝔨𝔯𝔞𝔦#1234')
        msg.channel.send(embed);
    }
}