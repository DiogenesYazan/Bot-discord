const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguém para beijá-los :3");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.reply("Nada de beijos a menos que você seja meu Dev :<")
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk se isso é possível chefe")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "242263403001937920") return message.reply("B-Baka, não é como se eu gostasse nem nada >///<")
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} Tascou-lhe o linguão em ${message.mentions.users.first().username}  😘`)
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
    name: 'kiss',
    description: 'Beija alguém OwO',
    category: "Ação",
    usage: 'kiss'
  };
