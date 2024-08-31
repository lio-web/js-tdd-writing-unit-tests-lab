import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("accepts a word as an argument and returns true if the word is a palindrome, and false if it isn't.", () => {
        const word = "racecar";
        const test = isPalindrome(word);
        expect(test).toBe(true);  // 'racecar' is a palindrome, so this should be true
    });

    it("returns false for a word that is not a palindrome", () => {
        const word = "car";
        const test = isPalindrome(word);
        expect(test).toBe(false); // 'hello' is not a palindrome, so this should be false
    });
});
