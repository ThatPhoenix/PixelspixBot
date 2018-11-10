
module.exports = Pixel => {
    console.log(`Connected to ${Pixel.guilds.size} guilds with a ping of ${Pixel.ping}`)
    Pixel.user.setPresence({ game: { name: `Testing New Pixelspix!`, type: 0 } });  
  };
  