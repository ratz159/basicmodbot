require('dotenv').config();
const Discord = require('discord.js');
const { DiscordAPIError } = require("discord.js");
const BOTNAME = process.env.BOTNAME;
const PFPURL = process.env.PFPURL;
module.exports = {
    name: 'ban',
    description: 'Bans a user',
    execute(msg, args) {
        msg.delete().then(() => {
            const executioner = msg.guild.members.resolve(msg.author);
            if (!(executioner.hasPermission('BAN_MEMBERS'))) {msg.reply('You do not have kick permissions'); return;};
            args.shift();
            var reasoning = args.join(" ");
            if (!reasoning) {
                reasoning = "No reason provided";
            }
            const user = msg.mentions.users.first();
                if (user) {
                const member = msg.guild.member(user);
                if (member) {
                    member.send(`You have been banned from ${ msg.guild.name } for: ${ reasoning }`).then(() => {
                    member.ban({
                        reason: reasoning,
                    }).then(() => {
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#800000')
                        .setTitle('Ban')
                        .setAuthor(`${ BOTNAME }`, `${ PFPURL }`)
                        .setDescription(`Banned ${ user } for ${ reasoning }`)
                        .setThumbnail('https://media3.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
                        .setTimestamp()
                        msg.channel.send(exampleEmbed);
                    }).catch(err => {
                        msg.reply('I was unable to ban the member');
                        console.error(err);
                    });
                    }).catch(err => {
                        msg.reply('We ran into an issue. Sorry about that')
                        console.error(err)
                    })
                } else {
                    msg.reply("That user isn't in this guild!");
                }
                } else {
                msg.reply("You didn't mention the user to ban!");
                }
            })
    }
}