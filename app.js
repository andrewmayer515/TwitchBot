var irc = require("tmi.js");

var options = {
	options: {
		debug: true
	},
	connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "AndrewMBot",
        password: "oauth:633lyv2a8j79evpir6cire777csw2i"
    },
    channels: ["#andrewmayer515"]
}

var client = new irc.client(options);
var channelName = "andrewmayer515";

client.connect();

client.on("chat", function (channel, user, message, self) {
	if (message === "hi") {
		client.action(channelName, "hello");
	}
});