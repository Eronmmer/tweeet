let emojis = [
	"😎",
	"🤓",
	"😊",
	"😀",
	"😋",
	"🙈",
	"🦅",
	"🐳",
	"🕺",
	"🤸",
	"👊",
	"🤗",
	"👌",
	"👇",
	"🤞",
	"🤘",
	"🌹",
	"🏍",
	"✈",
	"🚀",
	"🔥",
	"⚡",
	"🌟",
];

export const successEmoji = () => {
	return emojis[Math.floor(Math.random() * emojis.length)];
};
