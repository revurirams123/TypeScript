/// <reference path='fourslash.ts' />

//// class A {
////     /*a*/public a?: string = "foo";/*b*/
//// }

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Generate 'get' and 'set' accessors",
    actionName: "Generate 'get' and 'set' accessors",
    actionDescription: "Generate 'get' and 'set' accessors",
    newContent: `class A {
    private _a?: string = "foo";
    public get a(): string | undefined {
        return this._a;
    }
    public set a(value: string | undefined) {
        this._a = value;
    }
}`,
});
