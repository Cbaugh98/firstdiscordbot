'use strict';
const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('pong is online!');
});


client.on('message', message => {

	if(message.content.startsWith(`${prefix}`) && (message.author.bot === false)) {
		if(message.content.toLocaleLowerCase().startsWith(`${prefix}ping`)) {
			message.channel.send('pong!');
			console.log('bot_reply');
		}
		else if (message.content.toLocaleLowerCase().startsWith(`${prefix}hello`)) {
			message.channel.send('goodbye');
		}
		if (message.author.bot === true) {
			console.log('I see nothing');
		}
	}
	if(message.content.toLocaleLowerCase().startsWith('error')) {
		message.channel.send('https://cdn.discordapp.com/attachments/303481988382326784/754235178871685201/puustb57wo041.png');
	}
	if(message.content.toLocaleLowerCase().startsWith('who is pog')) {
		message.channel.send('<@242440927224922113> is');
	}
	if (message.content.toLocaleLowerCase().startsWith('damn right')) {
		message.channel.send('HECK YEA');
	}
	if (message.content.toLocaleLowerCase().startsWith('pog')) {
		message.channel.send('https://cdn.frankerfacez.com/emoticon/324468/4');
	}
});


client.login(`${token}`);