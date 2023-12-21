const { addKeyword } = require('@bot-whatsapp/bot');

const flowAgente = addKeyword("AGENTE", {sensitive: true})
    .addAnswer(
        "Estamos desviando tu conversacion a nuestro asesor"
    )
    .addAction(async (ctx, {provider}) =>{
        const nanoid = await import('nanoid');
        const ID_GROUP = nanoid.nanoid(5);
        const refProvider = await provider.getInstance();
        await refProvider.groupCreate(`JCM SOPORTE(${ID_GROUP})`, [
            `${ctx.from}@s.whatsapp.net`
        ])
    })
    .addAnswer(
        "Te hemos agregado a un grupo con nuestro asesor! Gracias!"
    )

module.exports = flowAgente;