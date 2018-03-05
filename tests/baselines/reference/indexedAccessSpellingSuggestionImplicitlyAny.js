//// [indexedAccessSpellingSuggestionImplicitlyAny.ts]
interface I { foof: number };
declare const i: I;
i.foo;
i["foo"];


//// [indexedAccessSpellingSuggestionImplicitlyAny.js]
;
i.foo;
i["foo"];
