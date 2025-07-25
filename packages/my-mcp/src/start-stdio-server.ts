import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"

export async function startStdioServer (server: McpServer) {
  // Use stderr for logging so it doesn't interfere with stdio transport
  process.stderr.write("=== MCP Server Debug Info ===\n")
  process.stderr.write("Starting MCP server...\n")
  process.stderr.write("Transport: stdio\n")
  process.stderr.write("Listening on stdin/stdout...\n")

  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport()

  process.stderr.write("Connecting to transport...\n")
  await server.connect(transport)
  process.stderr.write("MCP server connected successfully\n")
}
