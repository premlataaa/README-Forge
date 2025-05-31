const openai = require("../config/openai");
const { defaultTemplate } = require("../utils/markdownTemplates");

exports.generateReadmeContent = async (data) => {
    if (data.useAI) {
        const prompt = `create a professional README.md for a project with the following details: ${JSON.stringify(data)}`;
        try {
            const completion = await openai.chat.completions.create({
                model: 'gpt-4.1',
                messages: [{ role: 'user', content: prompt }]
            });

            return completion.choices[0].message.content;

        } catch (error) {
            if (error.status === 429) {
                throw new Error('OpenAI quota exceeded. Please check your billing details.');
            } else {
                throw new Error(error.message || 'Error generating README with OpenAI.');
            }
        }
        } else {
        return defaultTemplate(data);
    }
};