//const file = await Deno.open("pokedex.json");
//console.log(file)
import pokedex from './pokedex.js'

import { parse } from "https://deno.land/std@0.175.0/flags/mod.ts";

const flags = parse(Deno.args, {
  string: ["lang"],
});

switch (flags.lang) {
  case "jpn":
    console.log(Array.from(new Set(pokedex.map(p => p.name.jpn[0]))).sort(function(x,y){return x.localeCompare(y, 'ja')}).map(p => [p,p]))
    break
  case "cht":
    console.log(JSON.stringify(Array.from(new Set(pokedex.map(p => p.name.cht[0]))).sort(function(x,y){return x.localeCompare(y, 'zh')}).map(p => [p,p]), null, 2))
    break
  case "fra":
    console.log(JSON.stringify(Array.from(new Set(pokedex.map(p => p.name.fra[0]))).sort(function(x,y){return x.localeCompare(y, 'fr')}).map(p => [p,p])))
    break
  case "ger":
    console.log(JSON.stringify(Array.from(new Set(pokedex.map(p => p.name.ger[0]))).sort(function(x,y){return x.localeCompare(y, 'de')}).map(p => [p,p])))
    break
  }