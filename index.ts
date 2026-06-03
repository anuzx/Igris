#!/usr/bin/env bun

import { Command } from "commander";
import { runArise } from "./src/tui/arise"

const program = new Command();

program
  .name("igris")
  .description("personal coding agent")
  .version("0.0.1");

program
  .command("arise")
  .description("Show the banner and pick cli or telegram mode")
  .action(async () => {
    await runArise()
  });

await program.parseAsync(process.argv);
