const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");

exports.run = async (client, message, args, customisation) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Aqui está seu gato")
    .setImage(body.file) 
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cat',
    description: 'Envia gatos aleatórios',
    category: "Diversão",
    usage: 'cat'
  };
   
