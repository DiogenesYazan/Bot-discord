/**
 * O Comando Help envia uma mensagem de ajuda.
 * Contendo as informações dos comandos.
 */

module.exports = {

  run: (client, message, args) => {
    /** Objeto embed que irá ser enviado. */
    const embed = {
      color: "#6400b6",
      title: 'Minha lista de comandos',
      description: 'Esta é uma lista do que posso fazer.',
      timestamp: new Date(),
      footer: {
        text: '2021 ®Yazan The God#3519'
      },
      fields: []
    }

    let commands = client.commands

    if (message.member === null || !message.member.hasPermission('ADMINISTRATOR')) commands = commands.filter(c => c.help.admin)

    commands.forEach(command => {
      if (command.alias) return
      embed.fields.push({
        name: `** *${command.help.name}**`,
        value: `*Descrição*: ${command.help.description}
        *Categoria*: ${command.help.category}\n`
      })
    })

    message.channel.send({
      embed: embed
    })
      .then(() => message.react('⚡'))
      .catch(() => message.reply('eu não tenho permissões para enviar DM para você 😥'))
  },

  conf: {},

  help: {
    name: 'help',
    category: 'Ajuda',
    description: 'Mostra todos os comandos disponíveis do bot.',
    usage: 'help'
  }
}
