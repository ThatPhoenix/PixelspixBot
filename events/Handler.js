const reqEvent = (event) => require(`../events/${event}`);
module.exports = Pixel => {
  Pixel.on('ready', () => reqEvent('ready')(Pixel));
  Pixel.on('reconnecting', () => reqEvent('reconnecting')(Pixel));
  Pixel.on('disconnect', () => reqEvent('disconnect')(Pixel));
  Pixel.on('guildCreate', () => reqEvent('guildCreate')(Pixel));
           
           };
