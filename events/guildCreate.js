module.exports = Pixel => {
    console.log(`I've Joined a new server `);
    Pixel.user.setPresence({ game: { name: `In ${Pixel.guilds.size} Servers! | !cmds`, type: 0 } });
    };
