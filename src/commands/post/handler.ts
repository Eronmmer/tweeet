import axios from "axios";
import dotenv from "dotenv";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import { green } from "colorette";
import { successEmoji } from "../../utils";

dotenv.config();

const CONSUMER_KEY = process.env.API_KEY ?? "";
const CONSUMER_SECRET = process.env.API_SECRET ?? "";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN ?? "";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET ?? "";
const TWEET_URL = "https://api.twitter.com/2/tweets";

const oauth = new OAuth({
	consumer: { key: CONSUMER_KEY, secret: CONSUMER_SECRET },
	signature_method: "HMAC-SHA1",
	hash_function(baseString: string, key: string) {
		return crypto.createHmac("sha1", key).update(baseString).digest("base64");
	},
});

export const handleSendPost = async (text: string): Promise<void | string> => {
	if (!text.trim()) {
		return console.log("✖ Please enter some text");
	}

	const requestData = {
		url: TWEET_URL,
		method: "POST",
	};

	const authorization = oauth.authorize(requestData, {
		key: ACCESS_TOKEN,
		secret: ACCESS_TOKEN_SECRET,
	});

	const headers = {
		...oauth.toHeader(authorization),
		"Content-Type": "application/json",
	};

	const data = {
		text: text,
	};

	try {
		const response = await axios.post(TWEET_URL, data, { headers });

		if (response.status === 201) {
			return `${green(
				`Tweet sent out successfully! ${successEmoji()}`
			)}\n\nTweet ID: ${response.data.data.id}`;
		} else {
			return console.error("Error:", response.data);
		}
	} catch (error) {
		return axios.isAxiosError(error) && error.response
			? console.error("Error sending out tweet:", error.response.data)
			: console.error("Error:", error);
	}
};
