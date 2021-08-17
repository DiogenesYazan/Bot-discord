const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (client, message, args) => {
      let user = message.mentions.users.first() || message.author
      const embed = new Discord.MessageEmbed()
            .setTitle(`🖼️ ${user.tag}`)
            .setDescription(`**Clique [aqui](${user.displayAvatarURL()}) para baixar a imagem!**`)
            .setImage(message.author.avatarURL())
            .setColor('RANDOM')
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar',
    description: 'Mostra o avatar de um usuário',
    category: "info",
    usage: 'avatar'
};