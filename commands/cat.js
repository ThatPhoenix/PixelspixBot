//Requires Pixelspix Cat Database
const talkedRecently = new Set();


exports.run = function(Pixel, message, args) {

const CatData = require('../CatDat.json');
exports.run = function(Pixel, message, args) {
  message.channel.sendMessage("A wild cute cat has appeared!")
      message.channel.send(CatData[Math.floor(Math.random() * 4) +1]);
}
}
exports.help = {
  name: 'cat'
};
