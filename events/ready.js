/**
   * Evento ready é disparado assim que o bot é conectado ao Discord
   * 
   */

module.exports = async (client) => {
  console.log(`Eu estou online agora, meu nome é ${client.user.username}. Há ${client.users.cache.size} usuario(s) em ${client.guilds.cache.size} servidor(es)!`)

  client.user.setStatus('online')
  client.user.setPresence({
      game: {
          name: 'Use *help',
          type: "Playing",
          url: "https://discordapp.com/"
      }
  });
}
