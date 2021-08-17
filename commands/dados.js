const discord = require('discord.js');

exports.run = async (bot, message, args) => {

    if (args[0]) {
        if (args[0] < 1) return message.channel.send('Numero de dados inválido.');

        var dices = new Array();
        try {
            dices.length = parseInt(args[0]);
        } catch (e) {
            return message.channel.send('Numero de dados inválido.');
        }

        if (dices.length > 5)
            return message.channel.send('Você só pode jogar no máximo 5 dados por vez.');

        var dice_string = '';
        for (let i = 0; i < dices.length; i++) {
            dices[i] = Math.floor(Math.random() * 6) + 1;
            dice_string += `Dado ${i + 1}: **${dices[i]}**\n`;
        }

        return message.channel.send(new Discord.MessageEmbed()
            .addField('Resultado dos dados jogados 🎯', dice_string)
            .setColor("#00FF00"));

    } else {
        var dice = Math.floor(Math.random() * 6) + 1;
        return message.channel.send(`<@${message.author.id}> jogou o dado e parou em **${dice}** 🎯`);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: 'dados',
    description: 'Joga um ou mais dados para cima e exibe o resultado.🎯',
    category: "Diversão",
    usage: 'dados',
    aliases: []
};