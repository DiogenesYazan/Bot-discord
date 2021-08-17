exports.run = async (bot, message, args) => {
    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send('Cara😳!');
    }
    else {
      message.channel.send('Coroa👑!');
    }
},

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'coinflip',
    category: "Diversão",
    description: 'Jogue cara ou coroa',
    usage: 'coinflip'
  };
  
