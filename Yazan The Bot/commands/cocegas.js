const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools, customisation) => {
    if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém para fazer cócegas");
    if (message.mentions.users.first().id == client.user.id) return message.channel.send("Maaaanoooo para de cócegas")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, você teve cócegas por ${message.author.username}`)
    .setImage(body.url) 
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cocegas',
    description: 'Faz cócegas em alguém OwO',
    category: "Ação",
    usage: 'cocegas'
  };
