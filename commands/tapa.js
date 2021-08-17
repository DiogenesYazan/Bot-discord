const Discord = require('discord.js')
const superagent = require("superagent");

exports.run = async (bot, message, args) => {


    let User = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    if (!User) return message.channel.send("Mencione alguém para da um tapa.");
    if (User.id == message.author.id) return message.reply("você não pode dar um tapa em si mesmo.")

    const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/slap`);

    let Embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> deu um tapa em <@${User.id}>`)
        .setImage(body.url)
        .setColor("RANDOM")
        .setTimestamp()

    message.channel.send(Embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0
  };

exports.help = {
    name: 'tapa',
    description: 'Dê um tapa no seu abiguinhooo',
    category: "Diversão",
    usage: 'tapa',
    aliases: ['tapão', `slap`]
}