const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

client.config = {
"token": "token privado",
"prefix": "!"
}

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

["aliases", "commands"].forEach(x => client[x] = new Discord.Collection())

["command"].forEach((handler) => {
require(`./handler/${handler}`)(client)
})

client.on('ready', () => console.log('Bot encendido!'))

client.login(client.config.token)
