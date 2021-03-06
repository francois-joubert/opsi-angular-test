import { Component } from "@angular/core";
import { palindromeTestList } from "../../q-data/palindromes";
import { PalindromeService } from "../services/palindrome.service";

@Component({
  selector: "app-palindrome-tester",
  templateUrl: "./palindrome.component.html",
  styleUrls: ["./palindrome.component.css"]
})
export class PalindromeComponent
{
  public testList: any[];

  constructor(private _palindromeService: PalindromeService)
  {
    this.testList = palindromeTestList;
  }

  public test(testCase: any)
  {
    try
    {
      let isPalindrome = this._palindromeService.isPalindrome(testCase.word);

      return {
        value: isPalindrome,
        expected: testCase.res,
        pass: isPalindrome == testCase.res
      };
    }
    catch (e)
    {
      return {
        value: undefined,
        error: e.message,
        expected: testCase.res,
        pass: false
      };
    }
  }
}
