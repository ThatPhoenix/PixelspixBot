
module.exports = Pixel => {
    console.log(`Connected to ${Pixel.guilds.size} guilds with a ping of ${Pixel.ping}`)
    Pixel.user.setPresence({ game: { name: `In ${Pixel.guilds.size} Servers! | !cmds`, type: 0 } });  
  };
  
