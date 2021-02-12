require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN="ODA5NTgyMTIwMTAzMzEzNDE4.YCXMGg.Xw1wtjZoT4fK6-pUT2jIoub48Q0"


bot.login(TOKEN);

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
	if(msg.attachments)
	{
		msg.attachments.forEach((attachment) => {
			download(attachment.url);
			// console.log(attachment);
		})
	}
});

let request = require('request');
let fs = require('fs');
function download(url) {
	const name = url.split('/')[url.split('/').length-1];
	console.log(name);
	request.get(url)
		.on('error', console.error)
		.pipe(fs.createWriteStream(`./media/${name}`));
}

