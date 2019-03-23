const DDBL = require("ddblapi.js");
const Discord = require('discord.js')
const Pixel = new Discord.Client();
const ddbl = new DDBL(process.env.TOKA); //yeah no stealing my token
    
  ddbl.postStats("501802312604450820", 4); //Replace "0" to your server_count and "bot_id" to your bot ID



