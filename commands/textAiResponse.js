const { SlashCommandBuilder } = require("discord.js");
const { createChatResponse } = require("../apiCalls/createChatResponse");
const wait = require("node:timers/promises").setTimeout;
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("replies to what you are asking")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("what you want to ask the bot")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("tokens")
        .setDescription("how many tokens to use")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("creativity")
        .setDescription("how creative the answer should be")
        .setRequired(false)
    ),
  async execute(interaction) {
    let input = interaction.options.getString("input");
    let tokens = interaction.options.getString("tokens")
      ? interaction.options.getString("tokens")
      : "";
    let creativity = interaction.options.getString("creativity")
      ? interaction.options.getString("creativity")
      : "";
    await interaction.deferReply("waiting for reply");
    let response = await createChatResponse(input, tokens, creativity);
    await wait(4000);
    await interaction.editReply(`${response}`);
  },
};
