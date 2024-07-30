import BotApi from 'node-telegram-bot-api'
import dotenv from 'dotenv'
import config from './config.json';


dotenv.config()
const BOT_TOKEN = process.env.BOT_TOKEN 
const bot = new BotApi(BOT_TOKEN, {polling: true})

interface RequestForm {
    answers?: Array<Array<string>>,
    phone?: string,
    projectFile?: File
}

export async function sendAppTg(data: RequestForm) {
    let text = `Новая заявка\n-\n`

    if (data?.answers) {
        text += `Опрос для рассчёта стоимости:\n\n`

        data.answers.forEach(qa => {
            let q = qa[0];
            let a = qa[1];

            text += `Q: ${q}\n A: ${a}\n\n`;
        })
    } else {
        text += `Телефон: ${data.phone}`
    }

    if (data?.projectFile) {
        text += "\n-\nЗагруженный файл:"
    }

    for (const i in config.adminsId) {
        try {
            await bot.sendMessage(config.adminsId[i], text)
            if (data?.projectFile) {
                await bot.sendDocument(config.adminsId[i], Buffer.from(await data.projectFile.arrayBuffer()))
            }
        } catch {Error} {
            continue
        }
    }
}