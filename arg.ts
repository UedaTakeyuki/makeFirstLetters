console.log(Deno.args)

import { parse } from "https://deno.land/std@0.175.0/flags/mod.ts";

const flags = parse(Deno.args, {
  boolean: ["help", "color"],
  string: ["version"],
  default: { color: true },
});
console.log("Wants help?", flags.help);
console.log("Version:", flags.version);
console.log("Wants color?:", flags.color);