const Telegraf = require('telegraf');
const app = new Telegraf(517895811:AAEn49uOMiSHSULrH94M4xrDG6p2U-0LaiQ);

app.hears('hi', ctx => {
    return ctx.reply('Hey!');
});

app.startPolling();