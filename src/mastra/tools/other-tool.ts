import { createTool } from "@mastra/core";
import { z } from "zod";

export const otherTool = createTool({
  id: "get-weather",
  description: "Get current weather for a location",
  inputSchema: z.object({
    location: z.string().describe("City name"),
  }),
  outputSchema: z.object({
    hello: z.string(),
  }),
  execute: async ({ context }) => {
    return { hello: "world" };
  },
});
