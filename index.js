const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config/config.json');

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

client.on('message', async message => {
if (message.author.bot) return
 if(!message.guild) return;

  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);
  
  const aliases = client.commands.find(x => x.info.aliases.includes(command))


  if(cmd){
    cmd.run(client, message, args);
  } else if(aliases) {
    aliases.run(client, message, args);
  } else {
    return
  }
})

client.login(config.token)
