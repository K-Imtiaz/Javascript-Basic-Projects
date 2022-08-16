//includes
const lyrics = "You are a good person.That why I don't deserve you  you. But I love you so much";
// const doesExist = lyrics.includes('love');
const searchString = 'LovE';
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);



// ----------------------------
// indexOf
console.log(lyrics.indexOf('love'));
console.log(lyrics.indexOf('You'));

if (lyrics.indexOf('love') != -1) {
    console.log("Exist inside the string");
} else {
    console.log("Cannot find it.");
}

// startsWith
// console.log(lyrics.startsWith('You'));
//endsWith
// console.log(lyrics.endsWith('much'));
const fileName = "mybiodata.pdf";
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.png'));