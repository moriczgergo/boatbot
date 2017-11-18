module.exports = [
    {
        name: "+hello",
        regex: new RegExp("^\\+hello$", "i"),
        description: "Hi!",
        method: function(message) {
            message.reply("Hi!");
        }
    }
];