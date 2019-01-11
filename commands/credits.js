const Discord = require('discord.js')

exports.run = (Pixel, message) => {
  var embed = new Discord.RichEmbed();
  embed.setTitle('Pixelspix Credits')
  embed.setDescription(`**Owners!**: *ThatPhoenix* & *Nands* \n**Administrators**: \n*Elcobrox* \n*NUT NUT*`);
  embed.setColor('#d604cf');


  message.channel.sendEmbed(embed);

};



exports.help = {
  name: 'credits'
};

  
