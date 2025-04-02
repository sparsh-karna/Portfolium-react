const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const parsePDF = require("../utils/pdfParser");

const extractResumeData = async (pdfPath) => {
  // Step 1: Parse PDF to text
  const resumeText = await parsePDF(pdfPath);

  // Step 2: Initialize Gemini model
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    temperature: 0,
    apiKey: process.env.GOOGLE_API_KEY,
  });

  // Step 3: Define prompt to extract structured data
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "You are an expert resume parser. Extract the following information from the resume text in JSON format: " +
      "profileImage (leave empty), fullName, title, bio, email, phone, location, languages, " +
      "website, linkedin, github, twitter, skills, interests, " +
      "workExperience (array of objects with fields: company, role, duration, description), " +
      "education (array of objects with fields: institution, degree, duration), " +
      "projects (array of objects with fields: name, description), " +
      "achievements, certifications. If any field is missing, use an empty string or array.",
    ],
    ["human", "Resume text: {resumeText}"],
  ]);

  // Step 4: Create and invoke the chain
  const chain = prompt.pipe(model);
  const response = await chain.invoke({ resumeText });

  // Step 5: Parse the response to JSON
  try {
    console.log("Gemini response:", response.content);
    const cleanedContent = response.content.replace(/^```json\n|```$/g, "");
    const jsonData = JSON.parse(cleanedContent);
    return jsonData;
  } catch (error) {
    throw new Error("Failed to parse Gemini response to JSON: " + error.message);
  }
};

module.exports = { extractResumeData };