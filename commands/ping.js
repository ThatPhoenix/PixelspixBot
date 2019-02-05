const settings = ("../utils/settings.json")

exports.run = function(Pixel, message, args) {
 
 message.channel.send('**Playing Ping Pong with Phoenix**')
    .then(message => {
      message.edit(`Pong! my ping is ${message.createdTimestamp - message.createdTimestamp}ms. API's ping is ${Math.round(Pixel.ping)}m`);
  
});  
          };


exports.help = {
  name: 'ping'
};
