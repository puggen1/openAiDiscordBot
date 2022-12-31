const { EmbedBuilder } = require("discord.js");

function sendImages(allImages, query) {
  let embed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(`${query}`)
    .setURL(`${allImages.data[0].url}`)
    .setImage(`${allImages.data[0].url}`);

  return embed;
}
module.exports = {
  sendImages,
};
