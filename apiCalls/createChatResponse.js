const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
let apitoken = process.env.API_TOKEN;

async function createChatResponse(
  inputText = "say you have to write something",
  tokens = 4000,
  temp = 0
) {
  if (!tokens) {
    tokens = 4000;
  }
  if (!temp) {
    temp = 0;
  }
  let tokenNumber = parseInt(tokens);
  let tempNumber = parseFloat(temp);
  const configuration = new Configuration({
    apiKey: apitoken,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: inputText,
    max_tokens: tokenNumber,
    temperature: tempNumber,
  });
  return response.data.choices[0].text
    ? response.data.choices[0].text
    : response.data[0].error;
}

module.exports = {
  createChatResponse,
};
