exports.run = (Pixel, message) => {
    return message.reply(`You have flipped ${Math.random() > 0.5 ? "Heads" : "Tails"}.`);
  };
  
  
  exports.help = {
    name: 'coinflip',
    description: 'Flips a coin! (heads or tails)',
    usage: 'coinflip'
  };
  
