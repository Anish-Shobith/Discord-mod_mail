const Discord = require("discord.js");
const quickdb = require("quick.db");
const client = new Discord.Client();
const config = require("./config.json")

client.db = quickdb;
client.config = config;

//Handlers
require("./handler/eventhandler.js")(client)


client.login(config.token);
