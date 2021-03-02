module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(msg) {
      const { initialTime } = require('../index');
      msg
      .channel.send('Pong!').then((sentMessage) => {
      const finalTime = new Date().getTime();
      sentMessage
      .edit(`Pong! \`${ finalTime - initialTime} ms\``);
      });
    },
  };