const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: 'Kicks a user',
    execute(msg, args) {
        console.info('updated')
        const executioner = msg.guild.members.resolve(msg.author);
        if (!(executioner.hasPermission('KICK_MEMBERS'))) {msg.reply('You do not have kick permissions'); return;};
        if (!reasoning) {
            reasoning = "No reason provided";
        }
        console.log(args[0]);
        var user, member;
        if (msg.mentions.users.first()) {
            console.log(msg.mentions.users.first());
            user = msg.mentions.users.first();
            member = msg.guild.members.resolve(user);

        } else if (!msg.mentions.users.first()){
            var foo = args[0];
            var testy = "<@!" + foo + ">"
            console.log(testy)
            user = testy
            member = msg.guild.members.resolve(user);
            console.log(member)
        }
        console.log(user);
        args.shift();
        var reasoning = args.join(" ");
        if (member) {
            member
            .kick(`${ reasoning }`)
            .then(() => {
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#800000')
                .setTitle('Kicked')
                .setAuthor('Verdugo Manager', 'https://images-ext-1.discordapp.net/external/o_pWOwK0Om68yCEP15wGl9A0l2Mo2UKaabMEiSrT0bc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/807784293450776607/c68a968f61924a57da89e61d110ce97a.png', 'https://verdugohs.org')
                .setDescription(`Kicked ${ user } for ${ reasoning }`)
                .setTimestamp()
                msg.channel.send(exampleEmbed);
            })
            .catch(err => {
                msg.channel.send('I was unable to kick the member');
                console.error(err);
            });
        } else {
            msg.channel.send("That user isn't in this guild!");
        }
    },
  };