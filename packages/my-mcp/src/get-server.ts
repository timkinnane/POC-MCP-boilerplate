import { log } from "node:console"
import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"

export async function getServer () {
  // Create an MCP server
  const server = new McpServer({
    name: "demo-server",
    version: "1.0.0",
  })

  // Add an addition tool
  server.registerTool(
    "add",
    {
      title: "Addition Tool",
      description: "Add two numbers",
      inputSchema: { a: z.number(), b: z.number() },
    },
    async ({ a, b }) => {
      log(`register tool callback invoked with [${a}, ${b}]`)
      return {
        content: [{ type: "text", text: String(a + b) }],
      }
    },
  )

  // Add a dynamic greeting resource
  server.registerResource(
    "greeting",
    new ResourceTemplate("greeting://{name}", { list: undefined }),
    {
      title: "Greeting Resource", // Display name for UI
      description: "Dynamic greeting generator",
    },
    async (uri, { name }) => {
      log(`greeting resource callback invoked for ${uri}, name ${name}}`)
      return {
        contents: [
          {
            uri: uri.href,
            text: `Hello, ${name}!`,
          },
        ],
      }
    },
  )

  return server
}
