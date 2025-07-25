import { log } from 'node:console'
import {
  McpServer,
  ResourceTemplate,
} from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

export function getServer () {
  // Create an MCP server
  const server = new McpServer({
    name: 'demo-server',
    version: '1.0.0',
  })

  process.stderr.write('Registering tools and resources...\n')

  // Add an addition tool
  server.registerTool(
    'add',
    z.object({
      title: 'Addition Tool',
      description: 'Add two numbers',
      inputSchema: {
        a: z.number(),
        b: z.number(),
      },
    }),
    ({ a, b }) => {
      process.stderr.write(`[TOOL] add called with a=${a}, b=${b}\n`)
      const result = a + b
      process.stderr.write(`[TOOL] add returning: ${result}\n`)
      return {
        content: [{ type: 'text', text: String(result) }],
      }
    }
  )

  // Add a dynamic greeting resource
  server.registerResource(
    'greeting',
    new ResourceTemplate('greeting://{name}', { list: undefined }),
    {
      title: 'Greeting Resource', // Display name for UI
      description: 'Dynamic greeting generator',
    },
    (uri, { name }) => {
      log(`greeting resource callback invoked for ${uri}, name ${name}}`)
      return {
        contents: [
          {
            uri: uri.href,
            text: `Hello, ${name}!`,
          },
        ],
      }
    }
  )

  return server
}
