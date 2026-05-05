import Groq from "groq-sdk";

const apiKey = import.meta.env.VITE_GROQ_API_KEY || "placeholder_for_build";

const groq = new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
});

export default groq;
