const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(Pixel, message, args) {
message.channel.send(`TESTTT`)
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'test',
  description: 'View the Galaxy Status here.',
usage: 'GET INFO'
};
