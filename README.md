# 🙅 NaaS Telegram Bot

```
        ███╗   ██╗ ██████╗ ██╗
        ████╗  ██║██╔═══██╗██║
        ██╔██╗ ██║██║   ██║██║
        ██║╚██╗██║██║   ██║╚═╝
        ██║ ╚████║╚██████╔╝██╗
        ╚═╝  ╚═══╝ ╚═════╝ ╚═╝
```

> *"I'm nodding yes in spirit, but physically I'm shaking my head no."*
> — the bot, probably

A Telegram bot that fetches creative "no" responses from the [NaaS API](https://naas.isalman.dev) and lets you drop them into any conversation. 💬

Built with **TypeScript**, **[grammY](https://grammy.dev)**, and **Cloudflare Workers** — runs for 💰 $0/month.

## ✨ Features

| Feature | How | What happens |
|---|---|---|
| 👋 `/start` | Send in bot chat | Welcome message |
| 🎯 `/no` | Send in bot chat | Random creative "no" + 🎲 button for another |
| ❓ `/help` | Send in bot chat | Usage instructions |
| ⚡ `@nopify_bot` | Type in *any* chat | Pick from 3 fresh "no" options inline |

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/AnkurGel/nopify_bot.git
cd nopify_bot
npm install
```

### 2. 🤖 Create your bot

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. `/newbot` → pick a name and username
3. `/setinline` → enable inline mode
4. Copy the bot token

### 3. 🔧 Configure

```bash
cp .dev.vars.example .dev.vars
```

Fill in your `.dev.vars`:

```
BOT_TOKEN=your-token-here
BOT_INFO={"id":123,"is_bot":true,...}
```

Get `BOT_INFO` by running:

```bash
curl https://api.telegram.org/bot<TOKEN>/getMe
```

### 4. 🧪 Run locally

```bash
npm run dev
```

### 5. 🚢 Deploy

```bash
npm run deploy
npx wrangler secret put BOT_TOKEN
npx wrangler secret put BOT_INFO
```

Then set the webhook:

```bash
curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<WORKER>.workers.dev/"
```

## 📁 Project Structure

```
src/
├── index.ts              🌐 Worker entry point
├── bot.ts                🤖 Bot setup & handler registration
├── handlers/
│   ├── commands.ts       💬 /start, /no, /help
│   ├── callbacks.ts      🎲 "Another one" button
│   └── inline.ts         ⚡ Inline query → 3 options
└── services/
    └── naas.ts           🔌 NaaS API client
```

## 💜 Powered by

- [NaaS API](https://naas.isalman.dev) — No-as-a-Service 🙅
- [grammY](https://grammy.dev) — Telegram Bot framework 🤖
- [Cloudflare Workers](https://workers.cloudflare.com) — Serverless runtime ⚡
