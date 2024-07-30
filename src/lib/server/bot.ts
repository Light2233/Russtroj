import BotApi from 'node-telegram-bot-api'
import dotenv from 'dotenv'
import config from './config.json';


dotenv.config()
const BOT_TOKEN = process.env.BOT_TOKEN
const bot = new BotApi(BOT_TOKEN, {polling: true})

interface RequestForm {
    phone: string,
    projectFile?: File
}

export async function sendAppTg(data: RequestForm) {
    let text = `Новая заявка\n-\nТелефон: ${data.phone}`

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