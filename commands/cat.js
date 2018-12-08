
const CatDat = require('../CatDat.json');
exports.run = function(Pixel, message, args) {
  message.channel.sendMessage("A Wild Cute Cat has apeared")
      message.channel.send(CatDat[Math.floor(Math.random() * 5) +1]);
  
};

exports.help = {
  name: 'cat'
};
