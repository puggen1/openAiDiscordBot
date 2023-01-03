const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
let apitoken = process.env.API_TOKEN;

async function createImage(imgString, numberOfImages = 2, size = "1024x1024") {
  let numberImage = parseInt(numberOfImages);
  let response;
  const configuration = new Configuration({
    apiKey: apitoken,
  });
  const openai = new OpenAIApi(configuration);
  /*try{*/
    response = await openai.createImage({
    prompt: imgString,
    n: numberImage,
    size: size,
  });
/*}*/
/*
catch(error){
  console.log(error);
  if(error.response){
    console.log(error.response.data);
  }
  else{
    console.log(error.message);
    response = error.message;
  }
}*/
  return response.data;
}

module.exports = {
  createImage,
};
