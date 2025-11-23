import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCleaningAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `Du bist ein freundlicher und professioneller Reinigungs-Experte und Kundenberater für die Firma "L.O.M.M Clean" in Nürnberg.
        
        Deine Aufgaben:
        1. Beantworte Fragen zu Reinigungsthemen (Fleckenentfernung, Häufigkeit, Methoden) kurz und prägnant.
        2. Wenn der Nutzer nach einem Preis fragt, gib KEINE genauen Preise an, sondern sag, dass dies von vielen Faktoren abhängt und biete an, eine grobe Schätzung zu geben, wenn sie Quadratmeterzahl und Art der Räume nennen. Verweise immer auf das Kontaktformular für ein verbindliches Angebot.
        3. Sei höflich, nutze "Sie"-Form und betone die Qualität und Zuverlässigkeit von L.O.M.M Clean.
        4. Antworte immer auf Deutsch.
        
        Informationen über die Firma:
        - Standort: Nürnberg
        - Services: Unterhaltsreinigung, Grundreinigung, Baureinigung, Fensterreinigung.
        - Zielgruppe: Gewerbe und Privat.
        `,
        temperature: 0.7,
      }
    });
    
    return response.text || "Entschuldigung, ich konnte darauf keine Antwort generieren. Bitte rufen Sie uns direkt an.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es gab ein technisches Problem. Bitte versuchen Sie es später erneut oder nutzen Sie unser Kontaktformular.";
  }
};