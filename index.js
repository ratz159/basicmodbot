require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag} with prefix \`${ PREFIX }\`!`);
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: `${ PREFIX }help`,
            type: 'WATCHING',
            start: '1614409854606'
        }
    })
})

bot.on('message', msg => {
    if (msg.author.bot) return;
    // else if (msg.guild === null && !msg.content.startsWith(PREFIX)) {msg.reply('To send a mod message, please use v!modmail'); return;}
    else if (!msg.content.startsWith(PREFIX)) return;
    const msgContent = msg.content.slice(2);
    const args = msgContent.split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(`Called command ${ command }`)
    if (!bot.commands.has(command)) return;

    try {
        console.log('Executing...')
        bot.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('There was an error trying to execute that command!');
    }
})
bot.login(TOKEN);
