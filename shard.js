const { ShardingManager } = require("discord.js");

require("dotenv").config();

const manager = new ShardingManager("./index.js", {
  token: process.env.TOKEN,
  totalShards: Number(process.env.TOTAL_SHARDS),
});

manager.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));

manager.spawn();
