import express from 'express';
import OpenAI from 'openai';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PORT, DB_APIKEY } from './config.js';

const { Configuration, OpenAIApi } = OpenAI;
const app = express();

const configuration = new Configuration({
    organization: "org-Ocpm89EaNSJCFSEEKhvWpfqc",
    apiKey: DB_APIKEY,
});

const openai = new OpenAIApi(configuration);
app.use(bodyParser.json())
app.use(cors());
app.post('/', async (req, res) => {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 512,
        temperature: 1,
    });
    console.log(response.data);
    if (response.data.choices[0].text) {
        res.json({message: response.data.choices[0].text})
    }
});
app.listen(PORT, () => console.log('Server running on port: ', PORT));