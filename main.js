function isPangram(string){
  
  let all = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  string = string.toLowerCase();
  return all.every(l => string.includes(l));
  /* every 
  بتمشى على كل عنصر فى ال array 
  وتعمل عليه تيست لو كله صح تطلع true 
  لو حتى واحدة بس غلط تطلع false 
  إتعلمت الحل من stackoverflow 
  */
}

console.log(isPangram("detect pangram"));
console.log(isPangram("The quick brown fox Jumps over the laZy dog"));
console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));