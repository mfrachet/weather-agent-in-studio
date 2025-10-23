import { MCPServer } from "@mastra/mcp";

import { weatherTool } from "../tools/weather-tool";
import { weatherWorkflow } from "../workflows/weather-workflow";

export const weatherMcpServer = new MCPServer({
  id: "weather-mcp-server",
  name: "Weather Server",
  version: "1.0.0",
  tools: { weatherTool },
  workflows: { weatherWorkflow },
});
