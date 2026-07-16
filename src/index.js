require("dotenv").config({
  path: "./config/.env",
});

const {
  Client,
  GatewayIntentBits,
  Collection,
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// Store commands
client.commands = new Collection();

// Load commands
const ping = require("./commands/ping");
client.commands.set(ping.data.name, ping);

// Load events
const interactionCreate = require("./events/interactionCreate");
client.on(
  interactionCreate.name,
  (...args) => interactionCreate.execute(...args)
);

client.once("clientReady", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client
  .login(process.env.DISCORD_TOKEN)
  .then(() => console.log("Login request sent!"))
  .catch(console.error);