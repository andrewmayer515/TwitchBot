var irc = require("tmi.js");
var auth = require("./authentication.json")

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
	if (message === "hi") {
		client.action(channelName, "Hello " + user.username);
	}
});
