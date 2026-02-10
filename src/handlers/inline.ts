import { Composer } from "grammy";
import type { InlineQueryResult } from "grammy/types";
import { fetchNo } from "../services/naas.js";

export const inline = new Composer();

inline.on("inline_query", async (ctx) => {
  try {
    const reasons = await Promise.all([fetchNo(), fetchNo(), fetchNo()]);

    const results: InlineQueryResult[] = reasons.map((reason) => ({
      type: "article" as const,
      id: crypto.randomUUID(),
      title: reason,
      description: reason,
      input_message_content: { message_text: reason },
    }));

    await ctx.answerInlineQuery(results, { cache_time: 5 });
  } catch {
    // silently ignore — can't answer a stale/expired query
  }
});
