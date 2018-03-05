//// [indexedAccessSpellingSuggestion.ts]
interface I { foof: number };
declare const i: I;
i.foo;
i["foo"];


//// [indexedAccessSpellingSuggestion.js]
;
i.foo;
i["foo"];
