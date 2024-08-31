// utils.js
export function isPalindrome(word) {
    const cleanedWord = word.replace(/\W/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    return cleanedWord === cleanedWord.split('').reverse().join('');
}
