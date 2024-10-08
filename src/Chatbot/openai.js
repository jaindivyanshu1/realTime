import axios from "axios"; // Use import instead of require

export async function sendMsgToOpenAi(message) {
    console.log("Axios:", axios); // Debugging line
    console.log("Axios Request:", axios.request); // Debugging line

    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/chat",
        headers: {
            authorization: "",
        },
        data: {
            providers: "openai/gpt-4o",
            text: message,
            chatbot_global_action: "Proficient Coder",
            previous_history: [],
            temperature: 0.0,
            max_tokens: 500,
        },
    };

    try {
        const response = await axios(options);
        const result = response.data;
        const answer = result['openai/gpt-4o']['generated_text'];
        console.log(response.data);
        return answer;
    } catch (error) {
        console.error(error);
        return "Error";
    }
}
