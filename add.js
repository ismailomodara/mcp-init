import { McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
    name: "mcp-init",
    version: "0.0.1",
})

server.registerTool(
    "add",
    {
        title: "Addition Tool",
        description: "add two numbers together  ",
        inputSchema: {
            a: z.number(),
            b: z.number(),
        }
    },
    async ({ a , b }) => {
        return {
            content: [{ type: "text", text: String(a + b) }]
        }
    }
)

const transport = new StdioServerTransport();
await server.connect(transport);