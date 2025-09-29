import { Bot } from "grammy";

const botToken = process.env.YTB_BOT_TOKEN;
if (!botToken) {
	throw new Error("Environment variable YTB_BOT_TOKEN is not defined");
}

const bot = new Bot(botToken);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();
