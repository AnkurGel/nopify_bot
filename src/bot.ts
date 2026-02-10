import { Bot } from "grammy";
import type { UserFromGetMe } from "grammy/types";
import { commands } from "./handlers/commands.js";
import { callbacks } from "./handlers/callbacks.js";
import { inline } from "./handlers/inline.js";

export interface Env {
  BOT_TOKEN: string;
  BOT_INFO: string;
}

export function createBot(env: Env): Bot {
  const botInfo: UserFromGetMe = JSON.parse(env.BOT_INFO);
  const bot = new Bot(env.BOT_TOKEN, { botInfo });

  bot.use(commands);
  bot.use(callbacks);
  bot.use(inline);

  return bot;
}
