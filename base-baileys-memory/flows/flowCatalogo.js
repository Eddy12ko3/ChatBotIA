const { addKeyword } = require("@bot-whatsapp/bot");

const flowCatalogo = addKeyword("1", {sensitive: true})
    .addAnswer("Te mando el catalogo", {
        media: 'https://ncs.es/software/catalogos/catalogo.pdf'
    })
    .addAnswer("Espero que sea de tu agrado", {
        delay: 1500
    })

module.exports = flowCatalogo;