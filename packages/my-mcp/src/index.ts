#!/usr/bin/env node

import { console } from 'node:inspector'
import { getServer } from './get-server.js'
import { startStdioServer } from './start-stdio-server.js'

async function main (): Promise<void> {
  const server = await getServer()
  await startStdioServer(server)
}

main().catch((error: unknown) => {
  console.error('Failed to start MCP server:', error)
  process.exit(1)
})
