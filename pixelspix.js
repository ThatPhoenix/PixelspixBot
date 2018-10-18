const Discord = require('discord.js')
const Pixel = new Discord.Client
const Data = require("./data.json")

Pixel.on('ready', () => {
Pixel.user.setActivity("FIRST STARTUP YAY!")
});


Pixel.login(process.env.PixelTK)
// Don't think you can get away this time with hacking Pixelspix ;)
