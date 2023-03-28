const { Configuration, OpenAIApi  } = require('openai');


class Marv {
    constructor() {
        const configuration = new Configuration({
            apiKey: "OPENAI_API_KEY"
        });
        this.openAi = new OpenAIApi(configuration);
    }

    async ask(message) {
        const _message = `Marv is a chatbot with sarcastic responses:\n${message}`;
        const response = await this.openAi.createCompletion({
            model: "text-davinci-003",
            prompt: _message,
            temperature: 0.5,
            max_tokens: 60,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        });
        return response.data.choices[0].text.replace("?", "");
    }
}

module.exports = Marv;