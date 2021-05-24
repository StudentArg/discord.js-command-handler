module.exports = {
    config: {
        name: "help",
        category: "information",
        aliases: [],
        description: "Ayuda general del bot",
        usage: "",
    },
    run: async (client, message, args) => {
    message.channel.send('Hey!!!')
  }
}
