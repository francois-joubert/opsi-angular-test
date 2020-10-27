import { NumberService } from "./number.service";
export * from "./number.service";

import { PalindromeService } from "./palindrome.service";
export * from "./palindrome.service";

import { NumberSearchService } from "./number-search.service";
export * from "./number-search.service";

export const SERVICES = [NumberService, PalindromeService, NumberSearchService];
