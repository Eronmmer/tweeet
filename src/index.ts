#!/usr/bin/env node
process.on("unhandledRejection", (err) => {
	process.exit(0);
});

import dotenv from "dotenv";

import yargs from "yargs";
import { login, post } from "./commands";
import { helperText } from "./utils";

const y = yargs.scriptName("tweet");
const commands = ["login", "post"];

const argv = y.argv as { _: string[]; $0: string };
const invalidCommand =
	argv._.filter((elem: string) => commands.includes(elem)).length === 0;

if (invalidCommand) {
	helperText();
	process.exit(0);
}

login(y);
post(y);

y.parse();
