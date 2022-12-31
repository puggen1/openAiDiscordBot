const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { createImage } = require("../apiCalls/createImage");
const { sendImages } = require("../embed/embedImages.js");
const wait = require("node:timers/promises").setTimeout;
module.exports = {
  data: new SlashCommandBuilder()
    .setName("create")
    .setDescription("creates 1 to 4 pictures for you")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("what you want the bot to paint")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("amount")
        .setDescription("how many pictures")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("size")
        .setDescription("the size of the pictures")
        .setRequired(false)
        .addChoices(
          { name: '256x256', value: '256x256' },
          { name: '512x512', value: '512x512' },
          { name: '1024x1024', value: '1024x1024'},
        )
    ),
  async execute(interaction) {
    let input = interaction.options.getString("input");
    let amount = interaction.options.getString("amount")
      ? interaction.options.getString("amount")
      : 2;
    let size = interaction.options.getString("size")
      ? interaction.options.getString("size")
      : "1024x1024";
    await interaction.deferReply("Creating a masterpiece");
    let response = await createImage(input, amount, size);
    let embeds = sendImages(response, input);
    await wait(4000);
    await interaction.editReply({ embeds: [embeds] });
  },
};
