const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setAuthor(`**🏓Lanência atual ${Date.now() - message.createdTimestamp}ms. API Latência é ${Math.round(client.ws.ping)}ms.🏓**`)
      .setColor(message.member ? message.member.displayColor : global.CLIENT_DEFAULT_COLOR)

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'ping',
      description: 'Mostra a latência do bot.',
      usage: 'ping',
      category: 'Info'
    }
  }
}

