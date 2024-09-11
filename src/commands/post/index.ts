import { type Argv } from "yargs";
import { handleSendPost } from "./handler";

export const post = (yargs: Argv<{}>) => {
	return yargs.command({
		command: "post",
		describe: "Send out a tweet(post)",
		builder: {
			text: {
				describe: "The text of the Tweet being created",
				demandOption: true,
				type: "string",
				alias: "t",
			},
		},
		handler: async (argv) => {
			try {
				console.log(await handleSendPost(argv.text));
			} catch (err) {
				console.error(err, "something went wrong");
			}
		},
	});
};
