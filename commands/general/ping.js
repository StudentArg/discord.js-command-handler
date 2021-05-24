module.exports = {
config: {
        name: "ping",
        category: "general",
        noalias: [''],
        description: "Tiempo de respuesta del bot y la API de Discord.",
        usage: "",
  },
run: async (client, message, args) => {
  message.channel.send(client.ws.ping)
  }
}
