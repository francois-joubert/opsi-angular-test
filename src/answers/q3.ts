import { Injectable } from "@angular/core";

@Injectable()
export class PalindromeService {
  public isPalindrome(word: string): boolean {
    if (!word) {
      return false;
    }

    word = word.toLowerCase();

    let rev = word
      .split("")
      .reverse()
      .join("");

    return rev == word;
  }
}
