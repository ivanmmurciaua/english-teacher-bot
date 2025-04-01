import TelegramBot from 'node-telegram-bot-api';
import { gemini } from './gemini.js';

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if(chatId === parseInt(process.env.GROUP_ID) && msg.is_topic_message && msg.message_thread_id == parseInt(process.env.TOPIC_ID)){
        const aiResponse = await gemini(messageText);

        bot.sendMessage(chatId, aiResponse, {
            reply_to_message_id: process.env.TOPIC_ID,
            parse_mode: 'Markdown'
        });
    }
});