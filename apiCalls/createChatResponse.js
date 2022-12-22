const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
let apitoken = process.env.API_TOKEN;

async function createChatResponse(
  inputText = "you have to write something",
  tokens = 4000,
  temp = 0
) {
  const configuration = new Configuration({
    apiKey: apitoken,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: inputText,
    max_tokens: tokens,
    temperature: temp,
  });
  console.log(response.data.choices[0].text);
}
