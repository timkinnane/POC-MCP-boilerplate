# MCP Dev Boilerplate Monorepo

## Workspace Setup

1. Install Node version in [`.tool-versions`](./.tool-versions), recommended with
   [mise](https://mise.jdx.dev/)
2. Install/enable PNPM with `corepack && corepack prepare --activate`
3. Install dependencies and link workspace packages `pnpm install`
4. Build the example MCP server `pnpm run -F my-mcp-boilerplate build`

> [!NOTE]
> Workspace linting uses [Ultracite](https://ultracite.ai), a Biome preset with MCP integration.
>
> This was an experiment in using MCP for keeping generated code within standards, while building
> MCP servers to generate code. How meta!

## Dev Tools

There are two scripts at the root providing dev tooling for manually testing and debugging:

### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

Run `pnpm cli` to start.

The [server config](./.gemini/settings.json) for Gemini is included in the boilerplate.

Try with commands like `/mcp list` to show the example server description.

> [!NOTE]
>
> This may require an API key added to .env - https://aistudio.google.com/apikey

### [MCP Inspector](https://github.com/modelcontextprotocol/inspector)

Run `pnpm inspect` to start.

This UI shows the resources, tools and templates exposed by your MCP server and gives some basic
controls to trigger them and see outputs.

There are different ways to invoke this tool for different purposes. See the docs for details:

https://github.com/modelcontextprotocol/inspector?tab=readme-ov-file#ui-mode-vs-cli-mode-when-to-use-each

## VS Code Setup

The local example server and one remote example server are configured in
[`.vscode/mcp.json`](./.vscode/mcp.json)

## Resources

**Typescript MCP SDK**

https://github.com/modelcontextprotocol/typescript-sdk

**MCP Servers in VS Code**

https://code.visualstudio.com/docs/copilot/chat/mcp-servers

**Gemini MCP docs**

https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md

**Reference servers**

https://github.com/modelcontextprotocol/servers?tab=readme-ov-file#-reference-servers
