const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    description: 'Bans a user',
    execute(msg, args) {
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
                member.send(`You have been banned from the VHHS discord for: ${ reasoning }`).then(() => {
                member.ban({
                    reason: reasoning,
                }).then(() => {
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#800000')
                    .setTitle('Ban')
                    .setAuthor('Verdugo Manager', 'https://images-ext-1.discordapp.net/external/o_pWOwK0Om68yCEP15wGl9A0l2Mo2UKaabMEiSrT0bc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/807784293450776607/c68a968f61924a57da89e61d110ce97a.png', 'https://verdugohs.org')
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
    }
}