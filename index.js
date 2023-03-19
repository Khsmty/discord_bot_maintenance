const { Client, EmbedBuilder } = require("discord.js");

require("dotenv").config();

const client = new Client({
  intents: ["Guilds", "GuildMessages"],
});

client.on("ready", () => {
  console.log(`${client.user.tag} is ready!`);

  setInterval(() => {
    client.user.setActivity("⚠️ Under Maintenance | メンテナンス中です");
  }, 10000);
});

client.on("messageCreate", async (message) => {
  if (message.mentions.users.has(client.user.id)) {
    try {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setTitle("⚠️ Under Maintenance")
            .setDescription(
              "This bot is currently under maintenance. Please wait for a while until it is finished.\n" +
                "Please refer to the [support server](" +
                process.env.SUPPORT +
                ") for work progress.\n" +
                "We apologize for any inconvenience caused.\n\n" +
                "現在メンテナンス中です。終了までしばらくお待ちください。\n" +
                "作業進捗は [サポートサーバー](" +
                process.env.SUPPORT +
                ") を参照ください。\n" +
                "ご迷惑をおかけして申し訳ございません。"
            )
            .setColor("Yellow"),
        ],
      });
    } catch (e) {
      console.log(e);
    }
  }
});

client.login(process.env.TOKEN);
