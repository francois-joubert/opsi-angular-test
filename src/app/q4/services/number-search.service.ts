import { Injectable } from "@angular/core";

@Injectable()
export class NumberSearchService
{
  public findClosestPair(numbers: number[]): [number, number]
  {
    // Given that the input argument is a large array of positive integers 
    // with length > 1 000 000 000.
    //
    // Expand this method, using any standard built in functions, that would 
    // find the two indices of the numbers with the smallest numeric difference
    // as efficiently as possible.
    //
    // For example, given an array with 10 numbers:
    // x = [99, 3, 12, 0, 18, 4, 22, 191, 7, 42]
    // Then the answer would be [1, 5], since x[1] = 3 and x[5] = 4 have the 
    // smallest difference of 1.

    throw Error("Not implemented");
  }
}
