const Discord = require("discord.js");
const fs = require("fs");
let settings = require("./settings.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(settings.red)
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(settings.red)
        .setTitle("Uh Oh")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Uh Oh!")
        .setDescription("You cannot ban a bot.")
        .setColor(settings.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Uh Oh!")
        .setDescription("Could not find that user.")
        .setColor(settings.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Uh Oh!")
        .setDescription("Please supply a reason.")
        .setColor(settings.red);

    channel.send(embed).then(m => m.delete(5000));
}


