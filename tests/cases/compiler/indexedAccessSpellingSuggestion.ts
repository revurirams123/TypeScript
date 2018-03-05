// @target: esnext
// @noImplicitAny: false

interface I { foof: number };
declare const i: I;
i.foo;
i["foo"];
