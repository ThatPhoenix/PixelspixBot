//Requires Pixelspix Cat Database
const talkedRecently = new Set();
//Pixelspix Database Cooldown


if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {
const CatData = require('../CatDat.json');
exports.run = function(Pixel, message, args) {
  message.channel.sendMessage("A wild cute cat has appeared!")
      message.channel.send(CatData[Math.floor(Math.random() * 4) +1]);
  
};
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
exports.help = {
  name: 'cat'
};
