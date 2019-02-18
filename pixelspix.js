const Discord = require('discord.js');
const Pixel = new Discord.Client();
const fs = require('fs')
const settings = require('./utils/settings.json')
require('./utils/events.js')(Pixel);
const Load = require("./utils/botlisttest.js")


Pixel.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(settings.prefix) !== 0) return;
  //Command Loader
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(Pixel, message, args);
    } catch (err) {
           message.reply(`:x: | Uh Oh Something went wrong **${err}**`)
        
    }
})
Pixel.on('warn', e => {
  console.log(e);
});

Pixel.on('error', e => {
  console.log(e);
});
Pixel.login(process.env.PixelTK)
// Don't think you can get away this time with hacking Pixelspix ;)
