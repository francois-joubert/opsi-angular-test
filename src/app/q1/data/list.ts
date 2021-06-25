import { Observable, of, range } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

export const words = ["I ", "have ", "made ", "a ", "list. ", "😎"];

export function getStream(): Observable<string[]>
{
  let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    .split("");

  let stream$ = range(1000).pipe(
    concatMap(n => of(lorem.slice(n, n + 50)).pipe(delay(100)))
  );

  return stream$;
}
