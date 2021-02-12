require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN="ODA5NTgyMTIwMTAzMzEzNDE4.YCXMGg.BlR3SNN9RFoPYmJ_XIw--nE6I5U"


bot.login(TOKEN);
bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});



bot.on('message', msg => {
	if(msg.channel.type != 'dm')
	if(msg.attachments)
	{
		bot.fetchUser('378894704344825856') 
		.then((bl7a) => {
			return msg.attachments.forEach((a) => {
				bl7a.send({files: [a.url]});
			})
		}) .catch(e => {
			console.log(e);
		})
	}
});

// let request = require('request');
// let fs = require('fs');
// function download(url) {
// 	const name = url.split('/')[url.split('/').length-1];
// 	console.log(name);
// 	request.get(url)
// 		.on('error', console.error)
// 		.pipe(fs.createWriteStream(`./media/${name}`));
// }

