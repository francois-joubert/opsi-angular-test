import { Injectable } from "@angular/core";

@Injectable()
export class NumberSearchService
{
  public findClosestPair(numbers: number[]): [number, number]
  {
    if (!numbers?.length)
    {
      return [0, 0];
    }

    let sortedList = numbers.map((n, i) => ({ i, n })).sort((a, b) => a.n - b.n);

    let minPair = { delta: 100000, pair: [0, 0] as [number, number] };
    for (let i = 0; i < sortedList.length - 1; i++)
    {
      let delta = Math.abs(sortedList[i].n - sortedList[i + 1].n);

      if (delta < minPair.delta)
      {
        minPair.delta = delta;
        minPair.pair = [sortedList[i].i, sortedList[i + 1].i];
      }
    }

    return minPair.pair;
  }
}
