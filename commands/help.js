const Discord = require('discord.js');
require('dotenv').config();
const PREFIX = process.env.PREFIX;

module.exports = {
    name: 'help',
    desciption: 'Returns a help message',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#800000')
            .setTitle('Command List')
            .addFields(
                { name: `${ PREFIX }kick`, value: 'Kicks a user. (Requires kick perms).'},
                { name: `${ PREFIX }ban`, value: 'Bans a user. (Requires ban perms).'},
                { name: `${ PREFIX }setnick`, value: 'Changes a users nickname. (Requires manage nickname perms).'},
                { name: `${ PREFIX }unban`, value: 'Unbans a member. (Requires admin perms).'},
                { name: `${ PREFIX }help`, value: 'Displays this message.'}
            )
            .setTimestamp()
            .setFooter('VerdugoManager bot by 𝔇𝔞𝔯𝔨𝔯𝔞𝔦#1234')
        msg.channel.send(embed);
    }
}