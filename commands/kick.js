require('dotenv').config();
const Discord = require('discord.js');
const BOTNAME = process.env.BOTNAME;
module.exports = {
    name: 'kick',
    description: 'Kicks a user',
    execute(msg, args) {
        const executioner = msg.guild.members.resolve(msg.author);
        if (!(executioner.hasPermission('KICK_MEMBERS'))) {msg.reply('You do not have kick permissions'); return;};
        var user, member;
        if (msg.mentions.users.first()) {
            user = msg.mentions.users.first();
            member = msg.guild.members.resolve(user);

        } else msg.reply('You didn\'t mention a user!')
        args.shift();
        var reasoning = args.join(" ");
        if (!reasoning) {
            reasoning = "No reason provided";
        }
        if (member) {
            member.send(`You've been kicked from ${ msg.guild.name } for: ${ reasoning }`).then(() => {
                member
                .kick(`${ reasoning }`)
                .then(() => {
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#800000')
                    .setTitle('Kicked')
                    .setAuthor(`${ BOTNAME }`, 'https://images-ext-1.discordapp.net/external/LZtjrGg41lXSUWwqp3l_g3ChpOzZympOBzetF_AJ9S4/%3Fsize%3D256/https/cdn.discordapp.com/avatars/807784293450776607/cdf422b9411621bd933dc67156925a05.png')
                    .setDescription(`Kicked ${ user } for: ${ reasoning }`)
                    .setTimestamp()
                    msg.channel.send(exampleEmbed);
                })
                .catch(err => {
                    msg.channel.send('I was unable to kick the member');
                    console.error(err);
                });
            });
        } else {
            msg.channel.send("That user isn't in this guild!");
        }
    },
  };