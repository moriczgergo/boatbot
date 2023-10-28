const Discord = require('discord.js');

var logger = require('./lib/logger');
var commands = require('./lib/commands');

const token = process.env.BOAT_TOKEN;

var client = new Discord.Client();

client.on('ready', function() {
    logger("bot", "Ready!");
    client.user.setGame("Sailing | +hello")
});

client.on('message', function(message) {
    var command = commands.find(function(element){
        if (element.regex.exec(message.content)) return true; else return false;
    });
    if (command) {
        command.method(message, command.regex.exec(message.content), commands); //1: message, 2: args, 3: other commands
    }
});

client.login(token);

process.on('SIGINT', function() {
    logger("bot", "Disconnecting...");
    client.destroy().then(function() {
        logger("bot", "Disconnected.");
        process.exit();
    }).catch(function() {
        logger("bot", "Failed to properly disconnect.");
        process.exit();
    });
});