const settings = require("../settings.json")

exports.run = function(Pixel, message, args) {
 
 message.channel.send('**Playing Ping Pong with Phoenix**')
    .then(message => {
      message.edit(`Pong! :ping_pong: **my ping is** ${message.createdTimestamp - message.createdTimestamp}ms  **DiscordAPI's ping is** ${Pixel.ping}`);
  
};  
          };


exports.help = {
  name: 'ping'
};
