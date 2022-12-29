const { EmbedBuilder } = require("discord.js");

function sendImages(allImages) {
  let embed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle("image one")
    .setURL(`${allImages.data[0].url}`)
    .setImage(`${allImages.data[0].url}`);

  return embed;
}
module.exports = {
  sendImages,
};
