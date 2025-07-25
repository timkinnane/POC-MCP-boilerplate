# MCP Dev Boilerplate Monorepo

## Dev Tools

First install [Gemini CLI](https://github.com/google-gemini/gemini-cli) and/or [Claude Desktop](https://claude.ai/download).

```
brew install gemini-cli
brew install claude
```

These can both be configured with a local MCP server.

> [!NOTE]
>  
> **Claude** desktop seems like the easiest way to test local MCP integrations but can only run OpenAI models.
> If you don't have an OpenAI account or licence, it's still worth running free tier just to debug.

## Workspace Setup

1. Install Node version in [`.tool-versions`](./.tool-versions), recommended with
   [mise](https://mise.jdx.dev/)
2. Install/enable PNPM with `corepack @@ corepack prepare --activate`
3. Install dependencies and link workspace packages `pnpm install`

> [!NOTE]
> Workspace linting uses [Ultracite](https://ultracite.ai), a Biome preset with MCP integration.
>
> This was an experiment in using MCP for keeping generated code within standards, while building
> MCP servers to generate code. How meta!

## MCP Server Setup

## Gemini Setup

1. Get a Gemini API key: https://aistudio.google.com/apikey
2. Export or add that to your `.env` as `GEMINI_API_KEY`
3. 

## VS Code Setup

The local example server and one remote example server are configured in
[`.vscode/mcp.json`](./.vscode/mcp.json)

You can also add the setting for `chat.mcp.discovery.enabled` to allow VS Code to discover MCP
servers defined in tools like Claude Desktop.

## Resources

**Typescript MCP SDK**

https://github.com/modelcontextprotocol/typescript-sdk

**MCP Servers in VS Code**

https://code.visualstudio.com/docs/copilot/chat/mcp-servers

**Gemini MCP docs**

https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md

**Reference servers**

https://github.com/modelcontextprotocol/servers?tab=readme-ov-file#-reference-servers

## TODO

- [ ] Break down components for team to work in parallel
- [ ] Github authentication and search Pando codebase and examples
- [ ] Web search for Pando docs (with cache?)
- Slack authentication and search searching relevant answers on ask-pando- 
