var irc = require("tmi.js");
var auth = require("./authentication.json")
var moment = require("moment");

//Get the time that the node service starts
var startTime = moment();

//Set configs for Twitch API
var options = {
	options: {
		debug: false
	},
	connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: auth.username,
        password: auth.password
    },
    channels: ["#andrewmayer515"]
}

var client = new irc.client(options);
var channelName = "andrewmayer515";

client.connect();

client.on("chat", function (channel, user, message, self) {
	switch (message) {
		case "hi":
			client.action(channelName, "Hello " + user.username);
			break;
		case "*time":
			client.action(channelName, "Andrew has been online for x minutes");
			break;
		default:
			break;
	}
	/**if (message === "hi") {
		client.action(channelName, "Hello " + user.username);
	}**/
});
