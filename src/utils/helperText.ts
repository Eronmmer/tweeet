import { green, yellow, cyan } from "colorette";

export const helperText = () => {
	console.log(`
Usage
 ${green("tweeet")} ${cyan("<command>")} ${yellow("[--option]")}

Commands
 ${cyan("login")}     Sign in to your Twitter(X) account
 ${cyan("post")}      Send out a tweet(post)

Options
 ${yellow("--text")}, ${yellow("-t")}      Text of the Tweet being created

Examples
 ${green("tweeet")} ${cyan("login")}
 ${green("tweeet")} ${cyan("post")} ${yellow("-t")} ${cyan("'Hello, World!'")}
`);
};
