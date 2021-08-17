const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const inline = true
    const botAvatar = client.user.displayAvatarURL
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.size
    const usersize = client.users.size
    const status = {
      online: '`✅` Online',
      offline: '`⚫` Offline'
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Yazan The Bot `, client.user.avatarURL())
    .addField(`Version`, `1.0`, true)
    .addField(`Node JS`, `v16.3.0`, true)
    .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Servers`, `${client.guilds.cache.size}`, true)
    .addField(`Users`, `${client.users.cache.size}`, true)
    .addField(`Discord`, `[Entre em nosso servidor](https://discord.gg/ZfF4dK2)`, true)
    .addField(`Invite`, `[Não disponivel no momento](https://discord.gg/ZfF4dK2)`, true)
    .addField(`Desenvolvedor`, `Yazan The God#3519`, true)
    .setFooter("Prefix: * | Este bot ainda está em construção", "https://imgur.com/nvqwAtX")
    .setFooter(`2021 © ${client.user.username}.`)
    .setTimestamp()
    .setColor(0xFF0092);


    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do bot.',
      usage: 'botinfo'
    }
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}