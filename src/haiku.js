export function Haiku(str){
  this.str = str;
  this.line1 = "";
  this.line2 = "";
  this.line3 = "";

}

Haiku.prototype.checkLines = function() {
    let lines = this.str.split("\n", -1);
    console.log(lines);
    if(lines.length !== 3){
      return "haikus need to have 3 lines";
    } else {
      this.line1 = lines[0];
      this.line2 = lines[1];
      this.line3 = lines[2];
    }
};

Haiku.prototype.checkVowels = function(str1) {
    let words = str1.split(" ");
    let count = 0;
    for(i = 0; i < words.length; i++){
      // if(words[i].includes("ou") || words[i].includes("ie") || words[i].includes("oi") || words[i].includes("oo") || words[i].includes("ea") || words[i].includes("ee") || words[i].includes("ai")){
        words[i].replace("ou","o") && words[i];
      }
      let letters = words[i].split("");
      for(j = 0; j < letters.length; j++){

      count +=1;
    }
  })
  return count;
};
