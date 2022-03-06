/*
 *
 * CraftMusicX - Created By TheDomCraft
 * Copyright (C) 2022 TheDomCraft
 *
 */

const { ShardingManager } = require("discord.js");
const config = require('./config.json');

const shards = new ShardingManager("./server.js", {
    token: config.token,
    totalShards: 3
});

shards.on("shardReady", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Shard [ #${shard.id} ] wurde hochgefahren.`)
});

shards.spawn(shards.totalShards, 5000);
