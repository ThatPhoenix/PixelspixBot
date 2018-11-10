exports.run = (Pixel, message, args) => {
    let command;
    if (Pixel.commands.has(args[0])) {
      command = args[0];
    } else if (Pixel.aliases.has(args[0])) {
      command = Pixel.aliases.get(args[0]);
    }
    if (!command) {
      return message.channel.send(`I cannot find the command: ${args[0]}`);
    } else {
      message.channel.send(`Reloading: ${command}`)
        .then(m => {
          Pixel.reload(command)
            .then(() => {
              m.edit(`:white_check_mark: | Successfully reloaded: ${command}`);
            })
            .catch(e => {
              m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
            });
        });
    }
  };

  exports.conf = {
    aliases: [],
    permLevel: ""
};
      
exports.help = {
    name: 'reload',
    category: "-",
    description: '-',
    usage: '='
}
