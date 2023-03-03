//const file = await Deno.open("pokedex.json");
//console.log(file)
import pokemon_json from './pokedex.js'
console.log(Array.from(new Set(pokemon_json.map(p => p.name.jpn[0]))).sort(function(x,y){return x.localeCompare(y, 'ja')}).map(p => [p,p]))
console.log(JSON.stringify(Array.from(new Set(pokemon_json.map(p => p.name.cht[0]))).sort(function(x,y){return x.localeCompare(y, 'zh')}).map(p => [p,p]), null, 2))
