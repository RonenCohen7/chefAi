class AppConfig {
  public readonly gptUrl = "https://api.openai.com/v1/chat/completions";
  public readonly apiKey = import.meta.env.VITE_OPENAI_API_KEY || "";
}

export const appConfig = new AppConfig();
