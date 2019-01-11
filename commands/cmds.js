const Discord = require('discord.js');

exports.run = function(Anthony, message, args) {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Anthony Cmds')
  embed.setDescription(':rofl: | **Fun Commands **: `!cat` `!coinflip` \n:tools: | **Moderation Commands:** `!ban` `!kick` `report`\n:information_source: | **Info Commands** `!invite` `!credits` `!ping`');
  embed.setColor('#FF0000');
  embed.addField('No Patreons yet.')
  embed.setFooter('We hope you have fun with Anthony')

  message.channel.sendEmbed(embed);
};

exports.help = {
name: 'cmds'
};
