// Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// function capit(sentence) {
//     let words = sentence.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     let capitalize = words.join(' ');
//     return capitalize;
// }

// console.log(capit("this is javascript"));


// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

// function findWord(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "javascript") {
//             console.log("true");
//         }
//         else{
//             console.log("false");
//         }
//     }
  
// }

// let arr = ["javascript", "react", "node"];

// findWord(arr);



// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// let 


// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true




// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// function reverseSentence(sentence) {
//     let words = sentence.split('');    
//     let reversedWords = words.reverse(); 
//     let reversedSentence = reversedWords.join(''); 
//     return reversedSentence; 
// }

// let sentence = "i am learning javascript";
// console.log(reverseSentence(sentence));



// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success

// function reverseWords(sentence) {
//     let words = sentence.split(' ');    
//     let reversedWords = words.reverse(); 
//     let reversedSentence = reversedWords.join(' '); 
//     return reversedSentence; 
// }

// let input = "Success comes to those who work hard";
// console.log(reverseWords(input)); 



