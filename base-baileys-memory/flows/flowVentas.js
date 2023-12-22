const { addKeyword } = require('@bot-whatsapp/bot');
const { delay } = require('@whiskeysockets/baileys');
const { getUsers } = require('../api/user');

const flowVentas = addKeyword('Datos')
    .addAnswer("imagen", {
        media: 'https://www.africau.edu/images/default/sample.pdf'
    })
    .addAction(async (ctx, {endFlow, flowDynamic, provider}) =>{
        const jid = ctx.key.remoteJid;
        const refProvider = await provider.getInstance();

        await refProvider.presenceSubscribe(jid);
        await delay(500);

        await refProvider.sendPresenceUpdate("composing", jid);

        const user = await getUsers(ctx.from);

        if(user){
            await flowDynamic(`Datos: ${user.dni},${user.nombre},${user.direccion},${user.celular}`)
            await flowDynamic("Has sido doxxeado por 21433rfdevgew")
            return endFlow();
        }
    })

module.exports = flowVentas;