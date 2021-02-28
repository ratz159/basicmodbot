const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
module.exports = {
    name: 'kickid',
    description: 'kicks a user by id',
    execute(msg, args) {
        const executioner = msg.guild.members.resolve(msg.author);
        if (!(executioner.hasPermission('KICK_MEMBERS'))) {msg.reply('You do not have kick permissions'); return;};
        const user = args.shift();
        console.log(user);
        var reasoning = args.join(" ");
        if (!reasoning) {
            reasoning = "No reason provided";
        }
            if (user) {
            const member = msg.guild.member(`${ user }`);
            console.log(member);
            if (member) {
                member.send(`You have been kicked from the VHHS discord for: ${ reasoning }`).then(() => {
                member.kick({
                    reason: reasoning,
                }).then(() => {
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#800000')
                    .setTitle('Kick')
                    .setAuthor('Verdugo Manager', 'https://images-ext-1.discordapp.net/external/o_pWOwK0Om68yCEP15wGl9A0l2Mo2UKaabMEiSrT0bc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/807784293450776607/c68a968f61924a57da89e61d110ce97a.png', 'https://verdugohs.org')
                    .setDescription(`Kicked ${ user } for ${ reasoning }`)
                    .setThumbnail('https://media3.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif')
                    .setTimestamp()
                    msg.channel.send(exampleEmbed);
                }).catch(err => {
                    msg.reply('I was unable to kick the member');
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
            msg.reply("You didn't mention the user to kick!");
            }
    }
}