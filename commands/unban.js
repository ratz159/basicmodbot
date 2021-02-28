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
                .setAuthor('Verdugo Manager', 'https://images-ext-1.discordapp.net/external/o_pWOwK0Om68yCEP15wGl9A0l2Mo2UKaabMEiSrT0bc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/807784293450776607/c68a968f61924a57da89e61d110ce97a.png')
                .setDescription(`Unbanned ${ user } for ${ reasoning }`)
                .setTimeStamp()
            msg.channel.send(embedToSend);
            })
            .catch(console.error);
        }
    }
}