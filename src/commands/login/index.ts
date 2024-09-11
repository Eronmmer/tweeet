import { type Argv } from "yargs";
import { handleLogin } from "./handler";

export const login = (yargs: Argv<{}>) => {
	return yargs.command({
		command: "login",
		describe: "Sign in to your Twitter(X) account",
		handler: async () => {
			try {
				console.log(await handleLogin());
			} catch (err) {
				console.error("something went wrong");
			}
		},
	});
};
