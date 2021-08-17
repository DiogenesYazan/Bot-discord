const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém para alimentá-los!");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== customisation.ownerid) return message.channel.send("Eu não como")
    if (message.mentions.users.first().id == client.user.id && message.author.id === customisation.ownerid) return message.reply("Baka Dev-san, você sabe que os bots não comem> /// <Agora me dê mais RAM: 3")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/feed");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, você foi alimentado por ${message.author.username} OwO`)
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
    name: 'alimentar',
    description: 'Alimenta alguém OwO',
    category: "Diversão",
    usage: 'alimentar'
  };
