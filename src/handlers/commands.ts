import { Composer, InlineKeyboard } from "grammy";
import { fetchNo } from "../services/naas.js";

export const commands = new Composer();

commands.command("start", (ctx) =>
  ctx.reply(
    "Hey! I'm the No-as-a-Service bot. 🙅\n\n" +
      "Send /no to get a creative way to say no.\n" +
      "You can also type my username in any chat to pick a \"no\" inline!",
  ),
);

commands.command("help", (ctx) =>
  ctx.reply(
    "📖 *How to use this bot*\n\n" +
      "/no — Get a random creative \"no\"\n" +
      "Tap *Another one 🎲* to get a new one\n\n" +
      "*Inline mode:* Type `@" +
      ctx.me.username +
      "` in any chat to pick from 3 fresh options.",
    { parse_mode: "Markdown" },
  ),
);

commands.command("no", async (ctx) => {
  const reason = await fetchNo();
  await ctx.reply(reason, {
    reply_markup: new InlineKeyboard().text("Another one 🎲", "another"),
  });
});
