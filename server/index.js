const express = require("express");
const cors = require("cors"); // Import cors module
const bodyParser = require("body-parser");
const { OpenAI } = require('openai');
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: prompt,
    max_tokens: 30,
  });
  console.log(completion.choices[0].text);
  res.json({ response: completion.choices[0].text }); // Send the response back to the client
});

const port = 3000;
app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
