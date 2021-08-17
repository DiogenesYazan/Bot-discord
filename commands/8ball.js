const Discord = require("discord.js");

exports.run = async (bot, message, args, customisation) => {
    if(!args[0]) return message.reply("Por favor, faça uma pergunta completa");
    let replies = [
        'Pode ser.',
	    'Certamente não.',
	    'espero que sim.',
	    'Não em seus sonhos mais selvagens.',
    	'Há uma boa chance.',
	    'Bastante provável.',
    	'eu penso que sim.',
    	'espero que não.',
    	'espero que sim.',
    	'Nunca!',
    	'Pfft.',
	    'Desculpa brow.',
    	'Claro que sim.',
    	'O futuro é sombrio.',
	    'O futuro é incerto.',
	    'Eu prefiro não falar.',
    	'Quem se importa?',
    	'Possivelmente.',
    	'Nunca, nunca, nunca.',
    	'Há uma pequena chance.',
    	'Sim!',
    	'Não trouxa kpa kpa kpa.',
    	'Existe uma grande probabilidade.',
    	'Que diferença isso faz?',
    	'Não é problema meu.',
        'Pergunte a outra pessoa.'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setTitle("8 BALL MAGICA!!!")
    .setColor("#AA9900")
    .addField("Perg:", question)
    .addField("Resp:", replies[result])

    message.channel.send({embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: '8ball',
    description: 'Faça uma pergunta ao bot.',
    usage: '8ball (question)',
    category: "Diversão"
  };
  
