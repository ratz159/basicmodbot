require('dotenv').config();
const { Client } = require("discord.js");
const Discord = require('discord.js');
const BOTNAME = process.env.BOTNAME;
const PFPURL = process.env.PFPURL;
module.exports = {
    name: "setnick",
    description: "Changes the nickname of a user",
    execute(msg, args) {
        msg.delete().then( () => {
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
                        .setAuthor(`${ BOTNAME }`, `${ PFPURL }`)
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
        })
    }
}