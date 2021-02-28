const { Client } = require("discord.js");
const Discord = require('discord.js')
module.exports = {
    name: "setnick",
    description: "Changes the nickname of a user",
    execute(msg, args) {
        const executioner = msg.guild.members.resolve(msg.author);
        if (!(executioner.hasPermission('MANAGE_NICKNAMES'))) { msg.reply('You do not have the required perms to exectue this command!'); return};
        const numberHolder = args.shift();
        console.log(numberHolder)
        const newName = args.join(" ")
        var user = msg.mentions.users.first();
        if (user) {
            const member = msg.guild.members.resolve(user);
            console.log(member);
            if (member) {
                member
                .setNickname(newName)
                .then(() => {
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#800000')
                    .setTitle('Nick Name Change')
                    .setAuthor('Verdugo Manager', 'https://images-ext-1.discordapp.net/external/o_pWOwK0Om68yCEP15wGl9A0l2Mo2UKaabMEiSrT0bc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/807784293450776607/c68a968f61924a57da89e61d110ce97a.png', 'https://verdugohs.org')
                    .setDescription(`Changed nick for ${ user }`)
                    .setTimestamp()
                    msg.channel.send(exampleEmbed);
                })
                .catch(err => {
                    msg.channel.send('I was unable to change that users nick name');
                    console.log(err);
                })
            } else {
                msg.channel.send("I couldn't find that user!")
            }
        } else {
            msg.channel.send("You didnt mention a user!")
        }
    }
}