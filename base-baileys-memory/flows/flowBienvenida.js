const { addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const flowCatalogo = require('./flowCatalogo')

const flowBienvenida = addKeyword(EVENTS.WELCOME)
    .addAnswer(
        [
            "Bienvenido a *SISTEMA CONTINUO JCM*!",
            "Soporte tecnico, venta de componentes y mucho mas",
            "",
            "¿Como podemos ayudarle?",
            "",
            "*1*-° Ver catalogo de productos",
            "*2*-° Departamento de ventas",
            "*3*-° Departamento de soporte",
            "*4*-° Departamento de programacion"
        ]
    )
    .addAnswer(
        "Responda con el numero de la opcion!", null, null, [flowCatalogo]
    )

module.exports = flowBienvenida;