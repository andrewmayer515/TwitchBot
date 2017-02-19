var twitch = require("tmi.js");
var moment = require("moment");
var auth = require("./data/authentication.json");
var options = require("./data/options.json");
var helpers = require("./helpers.js");

//set the channel to talk in
var channelName = "andrewmayer515";
//pass in bot config
options.identity.username = auth.username;
options.identity.password = auth.password;

var client = new twitch.client(options);
client.connect();
console.log("Client connected");

var textResponse = function(response){
	client.action(channelName, response)
};

client.on("chat", function (channel, user, message, self) {
	switch (message) {
		case "hi":
			var text = "Hello " + user.username;
			textResponse(text);
			break;
		case "*time":
			client.action(channelName, "Andrew has been online for x minutes");
			break;
		default:
			break;
	}
});
