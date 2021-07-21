import { Component } from "@angular/core";
import { numbersTestList } from "../../q-data/numbers";
import { NumberSearchService } from "../services/number-search.service";

@Component({
  selector: "app-number-search-tester",
  templateUrl: "./number-search.component.html",
  styleUrls: ["./number-search.component.css"]
})
export class NumberSearchComponent
{
  public tests: {
    label: string;
    value: any;
    error?: string;
    expected: any;
    pass: boolean;
  }[];

  constructor(private _numberSearchService: NumberSearchService)
  {
    this.tests = numbersTestList.map(testCase => this.test(testCase));
  }

  public test(testCase: any)
  {
    try
    {
      let closestPair = this._numberSearchService.findClosestPair(
        testCase.value
      ).sort();

      return {
        label: testCase.label,
        value: closestPair,
        expected: testCase.res,
        pass:
          closestPair[0] == testCase.res[0] && closestPair[1] == testCase.res[1]
      };
    }
    catch (e)
    {
      return {
        label: testCase.label,
        value: undefined,
        error: e.message,
        expected: testCase.res,
        pass: false
      };
    }
  }
}
