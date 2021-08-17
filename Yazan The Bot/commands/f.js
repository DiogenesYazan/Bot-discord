const Discord = require('discord.js');

exports.run = async (client, message, args, customisation) => {
    if(args && args.length > 1){
        message.channel.send(`${message.author.username} apertou F para **${args.join(' ')}** demonstrar respeito😿`)
    }else{
        message.channel.send(`${message.author.username} apertou F para demonstrar respeito😿`)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eff"],
    permLevel: 0
  };
  exports.help = {
	name: 'f',
	description: 'Press F para mostrar respeito',
	category: "Diversão",
	usage: 'f'
};
