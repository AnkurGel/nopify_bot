import { Composer, InlineKeyboard } from "grammy";
import { fetchNo } from "../services/naas.js";

export const callbacks = new Composer();

callbacks.callbackQuery("another", async (ctx) => {
  const reason = await fetchNo();
  await ctx.editMessageText(reason, {
    reply_markup: new InlineKeyboard().text("Another one 🎲", "another"),
  });
  await ctx.answerCallbackQuery();
});
