var song = prompt("What song would you like to find the lyrics for? (Do not include punctuation)").replaceAll(" ", "-")
var creator = prompt("Who made that song")
var url = "genius.com/" + creator + "-" + song
fetch(url);
.then(res => res.text())
.then(text => {
  console.log(text)
})
