#!/usr/bin/env node

import { getServer } from "./src/get-server.js"
import { startStdioServer } from "./src/start-stdio-server.js"

async function main (): Promise<void> {
  const server = await getServer()
  await startStdioServer(server)
}

main().catch((/* error: unknown */) => {
  // console.error("Failed to start MCP server:", error)
  process.exit(1)
})
