const fs = require('fs');
const path = require('path');


function countWordOccurrences(content, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); 
  const matches = content.match(regex);
  return matches ? matches.length : 0;
}


function countWordInFile(filePath, word) {


  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }


    const count = countWordOccurrences(data, word);
    console.log(`The word "${word}" occurs ${count} time(s) in the file.`);
  });
}


const filePath = path.join(__dirname, 'file1.txt'); 
const wordToCount = 'hello'; 
countWordInFile(filePath, wordToCount);

