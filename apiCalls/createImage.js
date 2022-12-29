const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
let apitoken = process.env.API_TOKEN;

async function createImage(imgString, numberOfImages = 2, size = "1024x1024") {
  let numberImage = parseInt(numberOfImages);
  const configuration = new Configuration({
    apiKey: apitoken,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: imgString,
    n: numberImage,
    size: size,
  });
  return response.data;
}

module.exports = {
  createImage,
};
