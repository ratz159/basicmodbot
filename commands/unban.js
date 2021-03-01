require('dotenv').config();
const Discord = require('discord.js');
const BOTNAME = process.env.BOTNAME;
const PFPURL = process.env.PFPURL;

module.exports = {
    name: "unban",
    description: "Unbans a user",
    execute(msg, args) {
        console.log('Command started')
        const executioner = msg.guild.members.resolve(msg.author);
        if (!(executioner.hasPermission('ADMINISTRATOR'))) return;
        var user = args[0]
        args.shift();
        var reasoning = args.join(" ");
        if (!reasoning) {
            reasoning = "No reason provided";
        }
        console.log(user)
        if (user) {
            var unbanner = user
            unbanner = unbanner.split("");
            unbanner.shift();
            unbanner.shift();
            unbanner.shift();
            unbanner.pop();
            unbanner = unbanner.join("");
            msg.guild.members.unban(`${ unbanner }`)
            .then(() => {
                const embedToSend = new msg.Discord.MessageEmbed()
                .setColor('#800000')
                .setTitle('Ban')
                .setAuthor(`${ BOTNAME }`, `${ PFPURL }`)
                .setDescription(`Unbanned ${ user } for ${ reasoning }`)
                .setTimeStamp()
            msg.channel.send(embedToSend);
            })
            .catch(console.error);
        }
    }
}