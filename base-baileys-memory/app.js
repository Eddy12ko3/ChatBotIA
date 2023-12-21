require('dotenv').config()
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const ChatGPTClass = require('./ChatGPT/chatgpt.class')

const createBotAI = ({provider, database}) => {
    return new ChatGPTClass(database, provider)
}

const flowBienvenida = require('./flows/flowBienvenida')
const flowAgente = require('./flows/flowAgente')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowBienvenida, flowAgente])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
