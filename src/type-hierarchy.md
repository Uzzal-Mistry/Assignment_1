# Understanding any, unknown, and never in TypeScript

## Introduction
TypeScript's types form a hierarchy. At the top sits unknown, at the bottom sits never, and any is a special escape hatch that breaks the rules. Knowing how they relate explains why unknown is almost always the better choice.

## The Hierarchy

`unknown` is the top type. Every value can be assigned to it, but you must narrow it before use.

```ts
let value: unknown = "hello";
// value.toUpperCase(); // Error
if (typeof value === "string") value.toUpperCase(); // OK
```

`never` is the bottom type. No value can be assigned to it, and it is assignable to every type.

```ts
function throwError(message: string): never {
    throw new Error(message);
}
```

`any` disables type checking. It can be assigned to or from almost any type without errors

```ts
let risky: any = 42;
risky.toUpperCase(); // crashes at runtime
```
## Why Prefer unknown

Unknown is preferred over any because it provides type safety, while any disables type checking.

## Conclusion

Use unknown for uncertain data such as API responses, use never for impossible states and exhaustive checks, and avoid any unless migrating code.
