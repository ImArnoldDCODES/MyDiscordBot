const { Client, Intents } = require('discord.js');
require("dotenv").config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require("discord.js")
const fetch = require("node-fetch")
// const Database = require("@replit/database")
// const db = new Database()
const Token = process.env['TOKEN'];

const sadWords = ["sad", "depressed", "unhappy", "angry", "miserable"]

const encouragements = [
    "Cheer up!",
    "Hang in there.",
    "You are a great person / bot!"
  ]

function getQuote() {
    return fetch("https://zenquotes.io/api/random")
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data[0]["q"] + " -" + data[0]["a"]
      })
}

client.on("ready", () => {
    console.log(`Logged is as ${client.user.tag}!`);
});
client.on("ready", () => {
    console.log(getQuote())
})

client.on("message", (msg) => {
    if(msg.content === "inspire"){
    msg.channel.send("pong");
   }
   });


// client.on("message", msg => {

//     if(msg.author.bot) return

//     if(msg.content === "$inspire") {
//         getQuote().then(quote => msg.channel.send(quote))
//     }

//     if (sadWords.some(word => msg.content.includes(word))) {
//         const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
//         msg.reply(encouragement)
//       }
//   })

  
client.login(Token);