import { webhookCallback } from "grammy";
import { createBot, type Env } from "./bot.js";

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);

    if (req.method === "GET" && url.pathname === "/") {
      return new Response("naas-tg-bot is running", { status: 200 });
    }

    if (req.method !== "POST") {
      return new Response("Not found", { status: 404 });
    }

    const bot = createBot(env);
    return webhookCallback(bot, "cloudflare-mod")(req);
  },
};
